import React from "react";
import logo from "../assets/img/emoji.png";
function Card({ image, name, tags, description }) {
  return (
    <div className="">
      <div className="shadow flex flex-col items-center rounded-md w-72 pt-2">
        <img src={logo} alt="" className="w-24" />
        <h1>{name}</h1>
        <ul className="flex w-3/4 text-sm flex-wrap justify-center">
          {tags.map((tag, i) => (
            <li className="m-1 border border-black rounded-lg px-1" key={i}>
              {tag}
            </li>
          ))}
        </ul>
        <p className="w-4/5 m-2">{description}</p>
      </div>
    </div>
  );
}
export default Card;
{
  /* <Card
image="./assets/img/emoji.png"
name="name name"
tags={[
  "web developer",
  "mobile app developer",
  "graphic designer",
  "motion graphic",
  "graphic designer",
  "motion graphic",
  "graphic",
  "motion",
]}
description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, inventore!"
/> */
}
