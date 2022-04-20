import { Link, useParams } from "react-router-dom";

const Blog = () => {
  // const id=props.match.params.id -> in new version of react we can't do it any more and we use (useParams)
  //   console.log(useParams);
  const { id } = useParams();
  return (
    <div>
      <h2>Blog detail- {id}</h2>
      <Link to="/blogs">go to blog page</Link>
    </div>
  );
};
export default Blog;
