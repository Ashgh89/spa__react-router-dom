import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>This is the HomePage</p>
      <Link to="/about-us">Go to about us</Link>
    </>
  );
};

export default HomePage;
