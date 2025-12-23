import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const getStyles = ({ isActive }) => {
    const Style = "flex items-center gap-2 px-1 py-1 w-1 rounded-r-lg";
    return isActive
      ? `bg-indigo-800 px-1 text-slate-800 ${Style}`
      : `hover:bg-indigo-800 hover:text-slate-800 ${Style}`;
  };

  return (
    <aside className="flex flex-col gap-3 border-r-2 border-gray-200 w-36 h-fi px-3 py-1">
      <NavLink className={getStyles} to="/">
        <span className="material-symbols-outlined">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink className={getStyles} to="/archive">
        <span className="material-symbols-outlined">archive</span>
        <span>Archive</span>
      </NavLink>
      <NavLink className={getStyles} to="/Pinned">
        <span className="material-symbols-outlined">label_important</span>
        <span>Important</span>
      </NavLink>
      <NavLink className={getStyles} to="/bin">
        <span className="material-symbols-outlined">delete</span>
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};
