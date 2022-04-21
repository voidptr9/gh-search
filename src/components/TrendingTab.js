/* eslint-disable */
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { classNames } from "../App";
import { User } from "./User";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const GITHUB_TRENDING_DEVELOPERS_URL =
  "http://gh-trending-api.herokuapp.com/developers";
const RESOLVED_PROXY_URL = `${PROXY_URL}${GITHUB_TRENDING_DEVELOPERS_URL}`;

export const TrendingTab = () => {
  const [users, setUsers] = useState([]);

  // fetch(RESOLVED_PROXY_URL, {
  //   headers: {
  //     mode: "cors",
  //   },
  // }).then(res => {
  //   console.log(res.text());
  // });
  // .then(res => {
  //   setUsers(res.items || []);
  //   document.querySelector("#trending-tab").scrollIntoView();
  // });

  // console.log(users);

  return (
    <div id="trending-tab">
      <span>
        The URL over at{" "}
        <i>
          <b>{GITHUB_TRENDING_DEVELOPERS_URL}</b>
        </i>{" "}
        is behind CORS. Proxies don't seem to work from a local origin.
      </span>
      <ul>
        {/* {users.map((user, i) => {
          return <User key={`0x_${i}`} meta={user} />;
        })} */}
      </ul>
    </div>
  );
};
