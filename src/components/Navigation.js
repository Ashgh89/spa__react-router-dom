import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
