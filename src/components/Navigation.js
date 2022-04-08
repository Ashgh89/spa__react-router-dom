import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about-us"> About Us</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
