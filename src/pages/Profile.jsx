import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { userId } = useParams();
  console.log(userId);

  return (
    <div c>
      <h1 className="text-3xl">Profile Page</h1>
    </div>
  );
}

export default Profile;
