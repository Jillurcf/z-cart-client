import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/Images/Logo.png";

const NavBar = () => {
  const NavLinks = (
    <>
      <li className="text-[#3A2E56] font-bold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-[#3A2E56] font-bold">
        <NavLink
          to="/howItWorks"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          How it works
        </NavLink>
      </li>
      <li className="text-[#3A2E56] font-bold">
        <NavLink
          to="/pricing"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Pricing
        </NavLink>
      </li>
      <li className="text-[#3A2E56] font-bold">
        <NavLink
          to="/sellerApp"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Seller App
        </NavLink>
      </li>
      <li className="text-[#3A2E56] font-bold">
        <NavLink
          to="/faq"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          FAQ
        </NavLink>
      </li>
      
    </>
  );
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {NavLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
        </div>
        <div className=" navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavLinks}
          </ul>
         <Link to="/contactus"> <button  className="btn btn-warning text-[#3A2E56] font-bold">Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
