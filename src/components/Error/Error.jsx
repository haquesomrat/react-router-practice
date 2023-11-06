import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page text-center ">
      <h1 className="text-5xl">Oops!</h1>
      <p>Sorry, Not found</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
