import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { id, title, body } = post;

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="text-center my-10 space-y-10">
      <p>Post Id : {id}</p>
      <h3 className="text-2xl">Name:{title}</h3>
      <p className="text-lg">
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
