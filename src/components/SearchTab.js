/* eslint-disable */
import { Tab } from "@headlessui/react";
import { Fragment, useState, useEffect, useRef } from "react";
import { classNames } from "../App";
import { User } from "./User";
import { partition } from "../utils";

const GITHUB_API_QUERY_URL = "https://api.github.com/search/users?q=";

// This actually depends on the device. On my laptop, 5 is ok.
// On a larger screen, you want a bigger contrived value and
// on mobile, a smaller value (i.e. post-scrollIntoView).
const MAX_PAGINATION_COUNT = 5;

function paginate(users, currentIndex, setCurrentIndex) {
  const partitionedUsers = partition(users, MAX_PAGINATION_COUNT);

  function navigatePrevious() {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function navigateNext() {
    if (currentIndex < MAX_PAGINATION_COUNT) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <Fragment>
      {users.length <= MAX_PAGINATION_COUNT
        ? users
        : partitionedUsers[currentIndex]}
      <div className="mt-2">
        <button
          className="w-1/4 text-center text-lg font-medium p-2.5 mx-1 my-1 bg-blue-900/20 rounded-xl hover:bg-gray-50"
          title="Previous."
          onClick={navigatePrevious}>
          ←
        </button>
        <button
          className="w-1/4 float-right text-center text-lg font-medium p-2.5 mx-1 my-1 bg-blue-900/20 rounded-xl hover:bg-gray-50"
          title="Next."
          onClick={navigateNext}>
          →
        </button>
      </div>
    </Fragment>
  );
}

export const SearchTab = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [users, setUsers] = useState([]);
  const queryUser = e => {
    e.preventDefault();
    const queryString = e.target.querySelector("#search").value;
    fetch(GITHUB_API_QUERY_URL + queryString)
      .then(res => res.json())
      .then(res => {
        setUsers(res.items || []);
      })
      .catch(() => {
        console.error("Network error!");
      });
    const searchTab = document.querySelector("#search-tab");
    searchTab.scrollIntoView();
  };

  return (
    <div id="search-tab">
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
          paginate(
            users.map((user, i) => {
              return <User key={`0x_${i}`} meta={user} />;
            }),
            currentIndex,
            setCurrentIndex
          )
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
