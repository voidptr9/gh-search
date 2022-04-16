/* eslint-disable */
import { Tab } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";
import { classNames } from "../App";

const GITHUB_API_QUERY_URL = "https://api.github.com/search/users?q=";

// This actually depends on the device. On my laptop, 5 is ok.
// On a larger screen, you want a bigger contrived value and
// on mobile, a smaller value (i.e. post-scrollIntoView).
// const MAX_PAGINATION_COUNT = 5;

const User = ({ meta }) => {
  const { login, html_url, avatar_url, type } = meta;

  return (
    <li
      style={{ width: "100%" }}
      className="relative p-3 rounded-md hover:bg-gray-50 inline-flex">
      <div className="avatar inline-flex">
        <img src={avatar_url} className="w-20 rounded-full" />
      </div>

      <div style={{ width: "100%" }} className="py-2.5 px-3.5">
        <a href={html_url} target="_blank">
          <h3 className="text-sm font-medium text-lg">{login} ⧉</h3>
        </a>

        <ul className="flex mt-2 space-x-1 text-sm font-normal leading-4 text-coolGray-500">
          <li>{type}</li>
          {/* <li>&middot;</li> */}
        </ul>
      </div>
    </li>
  );
};

export const SearchTab = () => {
  const [users, setUsers] = useState([]);
  const [resetLoadToFalse, setResetLoadToFalse] = useState(false);
  const queryUser = e => {
    e.preventDefault();
    const queryString = e.target.querySelector("#search").value;
    fetch(GITHUB_API_QUERY_URL + queryString)
      .then(res => res.json())
      .then(res => {
        setUsers(res.items || []);
      });
    const searchTab = document.querySelector("#search-tab");
    searchTab.scrollIntoView();
  };

  return (
    <div>
      <form className="mb-4" autoComplete="off" onSubmit={queryUser}>
        <input
          className="glassy shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
          placeholder="Search for a user/organization"
        />
      </form>

      <ul>
        {users.length > 0 ? (
          users.map((user, i) => {
            return <User key={`0x_${i}`} meta={user} />;
          })
        ) : (
          <div className="text-center text-grey-200 text-md">
            Wow, such empty!
            {"\n"}
            ฅʕ•ᴥ•`ʔ
          </div>
        )}
      </ul>
    </div>
  );
};
