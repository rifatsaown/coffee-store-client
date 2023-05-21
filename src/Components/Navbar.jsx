import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const handleUpdate = () => {
    Swal.fire({
      title: "Please Click on the coffee edit button you want to update!",
      icon: "info",
    });
  };

  return (
    <div className="navbar bg-primary rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add a Coffee</Link>
            </li>
            <li>
              <Link onClick={handleUpdate} to="/">
                Update a Coffee
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Coffee Shop</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add a Coffee</Link>
          </li>
          <li>
            <Link onClick={handleUpdate} to="/">
              Update a Coffee
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
