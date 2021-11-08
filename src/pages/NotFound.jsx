import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="centered">
      <p>Page Not Found</p>
      <hr />
      <Link to="/">Back To Home</Link>
    </div>
  );
};
export default NotFound;
