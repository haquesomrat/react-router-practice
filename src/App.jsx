import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl my-10 text-center">Vite + React</h1>
        <div className="space-x-4 text-center">
          <NavLink to="/" className="px-3 py-2 rounded-md border-2">
            Contact
          </NavLink>
          <NavLink to="/users" className="px-3 py-2 rounded-md border-2">
            Users
          </NavLink>
          <NavLink to="/about" className="px-3 py-2 rounded-md border-2">
            About
          </NavLink>
          <NavLink to="/blogs" className="px-3 py-2 rounded-md border-2">
            Blogs
          </NavLink>
          <NavLink to="/posts" className="px-3 py-2 rounded-md border-2">
            Posts
          </NavLink>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
