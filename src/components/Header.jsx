import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo.svg";

function Header() {
  return (
    <header class="shadow mb-6 py-2">
      <div class="container flex flex-wrap justify-between  flex-col md:flex-row items-center">
        <div className="flex items-center ">
          <Link to="/">
            <img src={logo} alt="logo" className="mr-6" />
          </Link>

          <ul className="flex font-medium">
            <li>
              <Link class="mr-5 hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link class="mr-5 hover:text-blue-600">Post a Job</Link>
            </li>
            <li>
              <Link class="mr-5 hover:text-blue-600">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex font-medium">
            <li>
              <Link class="mr-5 hover:text-blue-600">Register</Link>
            </li>
            <li>
              <Link class="mr-5 hover:text-blue-600">Sign in</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
