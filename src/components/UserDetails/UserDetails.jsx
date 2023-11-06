import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email } = user;
  return (
    <div className="text-center my-40 ">
      <h4 className="text-3xl pb-10">User is :{name}</h4>
      <p className="text-xl">Email:{email}</p>
      <p></p>
    </div>
  );
};

export default UserDetails;
