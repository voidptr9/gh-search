/* eslint-disable */
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { classNames } from "../App";

const GITHUB_TRENDING_DEVELOPERS_URL =
  "https://gh-trending-api.herokuapp.com/developers";

export const TrendingTab = () => {
  const [users, setUsers] = useState([]);
  const [resetLoadToFalse, setResetLoadToFalse] = useState(false);
  const queryUser = e => {
    e.preventDefault();
    const queryString = e.target.querySelector("#search").value;
    fetch(GITHUB_TRENDING_DEVELOPERS_URL + queryString)
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
