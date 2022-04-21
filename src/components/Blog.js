import { Link, useParams, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Blog = () => {
  // const id=props.match.params.id -> in new version of react we can't do it anymore and we use (useParams)
  let query = useQuery();
  console.log(query.get("sort"));
  const { id } = useParams(); // http req=> axios.get("/blog/1")
  // So useParams is for making api request.
  // Here after blogs/(whatever we type here) is gonna be our id
  // So when u do an api request, you grab that and make that api request using that id
  return (
    <div>
      <h2>Blog detail- {id}</h2>
      <Link to="/blogs">go to blog page</Link>
      <br />
      <Link to={`/blogs/${parseInt(id) + 1}`}>go to the next blog</Link>
    </div>
  );
};
export default Blog;
