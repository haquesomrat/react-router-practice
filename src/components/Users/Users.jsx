import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  // receive data from fetch in main.jsx
  const users = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-3 gap-8 my-8">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
