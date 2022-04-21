import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="nested">
      <ul>
        <li>
          <NavLink to="/contact/dashboard">dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/contact/downloads">downloads</NavLink>
        </li>
      </ul>
    </aside>
  );
};
export default SideBar;
