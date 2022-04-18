import { useState } from "react";
import { Tab } from "@headlessui/react";
import { SearchTab } from "./components/SearchTab";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tabGroup = ["Recent", "Search", "Trending"];

const Tabs = () => {
  let [categories] = useState({
    Recent: <div>recenttttt</div>,
    Search: <SearchTab />,
    Trending: <b>wow</b>,
  });
  const [, setCategory] = useState("Search");

  return (
    <div
      style={{ margin: "0 auto" }}
      className="w-full max-w-md px-2 py-10 sm:px-0 justify-center">
      <Tab.Group>
        <Tab.List
          className="transition flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {tabGroup.map(cat => (
            <Tab
              key={cat}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }>
              <div onClick={() => setCategory(cat)}>{cat}</div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((comp, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "glassy",
                "bg-white rounded-xl p-3",
                "px-2.5 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}>
              {comp}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export const App = () => {
  return (
    <main>
      <header className="mt-20 text-blue-200 text-center">
        <h1 className="text-xl font-medium">GitHub Search</h1>
        <h3 className="text-lg">
          Search users and organizations like it's 2022!
        </h3>
      </header>
      <Tabs />
    </main>
  );
};
