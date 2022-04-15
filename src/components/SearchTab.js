import { Tab } from "@headlessui/react";
import { classNames } from "../App";

export const SearchTab = () => {
  return (
    <ul>
      <li className="relative p-3 rounded-md hover:bg-coolGray-100">
        <h3 className="text-sm font-medium leading-5">Abdullahi Moalim.</h3>

        <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
          <li>January</li>
          <li>&middot;</li>
          <li>{20} comments</li>
          <li>&middot;</li>
          <li>{32} shares</li>
        </ul>

        <a
          href="#"
          className={classNames(
            "absolute inset-0 rounded-md",
            "focus:z-10 focus:outline-none focus:ring-2 ring-blue-400"
          )}
        />
      </li>
    </ul>
  );
};
