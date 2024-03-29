import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-white px-3 py-2 bg-[#d2ba21] rounded-sm"
          : "text-white px-3 py-2 dark:text-white"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;