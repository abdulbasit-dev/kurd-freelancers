import React from "react";
import { useParams } from "react-router-dom";

import starFull from "../assets/img/star-full.svg";
import halfStar from "../assets/img/star-half.svg";
import emptyStar from "../assets/img/star-empty.svg";

import facebook from "../assets/img/facebook.svg";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";

function Profile() {
  const { userId } = useParams();
  console.log(userId);

  const projects = [
    {
      name: "Project Name",
      des:
        " Lorem ipsum dolor sit amet consectetu adipisicing elit. Nisi, error, repellendus tenetur rem sequi illo atque ea corrupti numquam",
    },
    {
      name: "Project Name",
      des:
        " Lorem ipsum dolor sit amet consectetu adipisicing elit. Nisi, error, repellendus tenetur rem sequi illo atque ea corrupti numquam",
    },
    {
      name: "Project Name",
      des:
        " Lorem ipsum dolor sit amet consectetu adipisicing elit. Nisi, error, repellendus tenetur rem sequi illo atque ea corrupti numquam",
    },
  ];

  return (
    <div className="container">
      <div className="flex justify-between border pt-24 bg-cover px-4 pb-1">
        {/* avatar */}
        <img
          alt="Remy Sharp"
          src="https://www.pngkit.com/png/detail/169-1699138_lachlan-as-an-anime-character-anime-characters-png.png"
          className="rounded-full h-24 w-24 "
        />
        {/* rating */}
        <div className="text-white">
          <h3 className="mb-2">Rating:</h3>
          <div className="flex items-center">
            <img src={starFull} alt="" />
            <img src={starFull} alt="" />
            <img src={starFull} alt="" />
            <img src={halfStar} alt="" />
            <img src={emptyStar} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center ">
          <h2 className="text-3xl">John Doe</h2>
          <p className="ml-4 text-green-400">Available</p>
        </div>
        <p className="mt-2 text-gray-500 ">
          Web Developer | Mobile App Developer
        </p>
        <div className="flex mt-3">
          <button className="bg-blue-600 hover:bg-blue-700 rounded-md font-medium px-8 py-1 text-white mr-6">
            {" "}
            Hire
          </button>
          <button className="bg-white border border-blue-600 text-blue-600  rounded-md font-medium px-8 py-1 hover:bg-gray-200 ">
            Rate
          </button>
        </div>
      </div>
      <div className="mt-4 w-3/5">
        <h2 className="text-2xl  border-b-2 border-gray-400 pb-3">About Me:</h2>

        {/* <div className="bg-gray-400 h-0.5 rounded-lg"></div> */}
        <p className="mt-2 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, error,
          repellendus tenetur rem sequi illo atque ea corrupti numquam
          voluptates officia maxime iusto omnis magnam ad odio delectus non
          vitae?
        </p>
      </div>

      <div className="mt-16 flex items-start mb-16">
        <div>
          <h2 className="text-2xl ">My Projects:</h2>
          {projects.map((item, index) => (
            <div className="mt-2 pl-3" key={index}>
              <div className="flex items-center">
                <h3 className="text-xl font-medium mr-4">
                  {index + 1}- {item.name}
                </h3>
                <div className="text-blue-500 hover:text-blue-600 pt-1 ">
                  <a
                    className="pr-2"
                    href="https://google.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Demo
                  </a>{" "}
                  |
                  <a
                    href="https://google.com"
                    className="pl-2"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Source Code
                  </a>
                </div>
              </div>
              <p className="mt-2 text-gray-500 w-2/4">{item.des}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl ">Contact:</h2>
          <div className="pl-3">
            <p>
              Email:{" "}
              <a
                href="mailto:test@gmail.com"
                className="hover:text-blue-500 text-gray-600"
              >
                test@gmail.com
              </a>
            </p>
            <p className="pt-1">
              Phone Number:{" "}
              <span className="text-gray-600">+964 750 444 0000</span>
            </p>
            <p className="pt-1">
              Address:{" "}
              <span className="text-gray-600">Erbil,Kurdistan,Iraq</span>
            </p>
          </div>
          <div className="flex  items-center mt-4 pl-3">
            <a
              href="https://facebook.com/test"
              rel="noopener noreferrer"
              target="_blank"
              className="mr-3"
            >
              <img src={facebook} alt="" />{" "}
            </a>
            <a
              href="https://github.com/test"
              rel="noopener noreferrer"
              target="_blank"
              className="mr-3"
            >
              {" "}
              <img src={github} alt="" />
            </a>
            <a
              href="https://Linkedin.com/test"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
