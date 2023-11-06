import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone, website } = user;
  return (
    <div className="p-6 border-4 border-blue-400 space-y-6 text-center rounded-xl">
      <h3 className="text-3xl font-bold">Name:{name}</h3>
      <p className="text-xl">Phone:{phone}</p>
      <p className="text-2xl">Email:{email}</p>
      <p className="text-4xl">Website:{website}</p>
      <button className="bg-red-300 p-3 rounded-lg text-lg font-semibold text-white">
        <Link to={`/users/${id}`}>Details</Link>
      </button>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
