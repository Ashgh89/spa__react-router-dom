import { NavLink } from "react-router-dom";

const Navigation = () => {
  const items = [
    { name: "home", to: "/", exact: "true" },
    { name: "About Us", to: "/about-us" },
    { name: "Contact", to: "/contact" },
  ];
  return (
    <nav className="container">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink to={item.to} exact={item.exact}>
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navigation;
