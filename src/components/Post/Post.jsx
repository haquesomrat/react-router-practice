import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();

  const handleShowDetail = () => {
    navigate(`${id}`);
  };
  return (
    <div className="border-2 p-6 rounded-lg space-y-6 grid">
      <p>Id: {id}</p>
      <h3 className="text-xl">{title}</h3>

      <Link to={`${id}`}>Details</Link>
      <button onClick={handleShowDetail}>Show Details</button>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
