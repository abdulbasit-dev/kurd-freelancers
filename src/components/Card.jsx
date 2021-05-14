import React from "react";
import { Link } from "react-router-dom";
function Card({ image, name, tags, description, path }) {
  return (
    <Link to={path}>
      <div className="">
        <div className="p-4 shadow-b flex flex-col items-center border border-gray-200  rounded-md w-80 ">
          {/* <img src={logo} alt='' className='w-24' /> */}
          <h1 className="text-2xl mb-2">{name}</h1>
          <ul className="flex w-3/4 text-sm flex-wrap justify-center">
            {tags.map((tag, i) => (
              <li
                className="m-1 border border-blue-400 text-blue-400 rounded-lg px-1"
                key={i}
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="w-4/5 m-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}
export default Card;
