import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col w-full bg-gray-800 relative bottom-0">
      <div className="flex my-4 mx-20 flex-wrap">
        <div className="flex w-full sm:w-1/2 lg:w-1/4 md:w-2/6 xl:w-1/5 mt-3">
          <ul className="text-white">
            <h2 className="text-xl font-bold">Naigation</h2>
            <li className="mt-2 hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link>Post a Job</Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link>Find a Freelancer</Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link>Find a Job</Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link>Interprice a Solutions</Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link>Agency Solutions</Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link>PO Solutions</Link>
            </li>
          </ul>
        </div>
        <div className="flex w-full sm:w-1/2 lg:w-1/4 md:w-2/6 xl:w-1/5 mt-3">
          <ul className="text-white">
            <h2 className="text-xl font-bold">Company Info</h2>
            <li className="mt-2 hover:underline">
              <Link>About KurdFreelancer</Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link>How KurdFreelancer Works</Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link>Why KurdFreelancer</Link>
              </li>
            <li className="mt-2 hover:underline">
              <Link>Work Agreements</Link>
            </li>
            <li className="mt-2 hover:underline">
              Safe Pay
            </li>
            <li className="mt-2 hover:underline">
              Pricing
            </li>
          </ul>
        </div>
        <div className="flex w-full sm:w-1/2 lg:w-1/4 md:w-2/6 xl:w-1/5 mt-3">
          <ul className="text-white flex flex-col">
            <h2 className="text-xl font-bold">Company Info</h2>
            <li className="mt-2 hover:underline">
              <Link>About KurdFreelancer</Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link>How KurdFreelancer Works</Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link>Why KurdFreelancer</Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link>Work Agreements</Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link>Safe Pay</Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link>Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="flex w-full sm:w-1/2 lg:w-1/4 md:w-2/6 xl:w-1/5  mt-3">
          <ul className="text-white flex flex-col">
            <h2 className="text-xl font-bold">Policies</h2>
            <li className="mt-2 hover:underline">
              <Link>IP Policy</Link> 
            </li>
            <li className="mt-2 hover:underline">
              <Link>Privacy Policy </Link>
            </li>
            <li className="mt-2 hover:underline">
              <Link>Terms of service</Link>
            </li>
          </ul>
        </div>
        <div className="flex w-full sm:w-1/2 lg:w-1/4 md:w-2/6 xl:w-1/5 mt-3">
          <ul className="text-white flex flex-col">
            <h2 className="text-xl font-bold">Connect With Us</h2>
            <Link></Link>
            <Link></Link>
            <Link></Link>
          </ul>
        </div>
      </div>
      <div className="flex my-3 justify-around text-white">
        <Link className="hover:underline" to="/">Kurd Freelancer</Link>
        <h3 >Copyright &copy; {new Date().getFullYear()}</h3>
      </div>
    </div>
  );
}

export default Footer;
