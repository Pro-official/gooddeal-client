import React from "react";
import { Link } from "react-router-dom";
import notfound from "../src/images/notfound.jpg";

const Notfound = () => {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src={notfound}
        alt="Not Found"
        className="absolute h-full w-full object-cover"
      />
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-header text-black leading-tight mt-4">
            You&#x27;re alone here
          </h1>
          <Link to="/home">
            <h2 className="font-black text-2xl text-header text-black underline">
              Go Back! -{">"}
            </h2>
          </Link>
          <p className="font-extrabold text-8xl my-44 text-black animate-bounce">
            404
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
