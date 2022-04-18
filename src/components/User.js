export const User = ({ meta }) => {
  const { login, html_url, avatar_url, type } = meta;

  return (
    <li
      style={{ width: "100%" }}
      className="relative p-3 rounded-md hover:bg-gray-50 inline-flex">
      <div className="avatar inline-flex">
        <img
          src={avatar_url}
          className="w-20 rounded-full"
          alt="User avatar."
        />
      </div>

      <div style={{ width: "100%" }} className="py-2.5 px-3.5">
        <a href={html_url} target="_blank" rel="noreferrer">
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
