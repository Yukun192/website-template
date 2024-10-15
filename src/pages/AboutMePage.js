import React from "react";
import stockPhoto from "../stockphoto.jpg";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center py-10 min-h-screen">
      <h1 className="text-6xl font-medium mb-5">About Me</h1>
      {/* image */}

      {/*"about me" section */}
      <div className="bg-blue-200 min-w-56 max-w-96 font-bold flex justify-center px-5"></div>
      {/* bio */}
      <p className="w-96 px-5">My name is Yukun Peng. I hold the B.Eng in EEE from University of Liverpool.</p>
      {/* hobbies and interests */}
      {/* To make a list:
      <ul>
        <li>item</li>
        <li>item</li>
      </ul> */}
    </div>
  );
};

export default AboutMe;
