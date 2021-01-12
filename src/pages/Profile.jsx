import React from "react";
import { useParams } from "react-router-dom";

import starFull from "../assets/img/star-full.svg";
import halfStar from "../assets/img/star-half.svg";
import emptyStar from "../assets/img/star-empty.svg";

function Profile() {
  const { userId } = useParams();
  console.log(userId);

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
    </div>
  );
}

export default Profile;
