import React from "react";

function Navbar() {
  return (
    <div className="flex flex-col items-center py-8 px-4">
      <p className="text-s5 font-semibold my-2.5 w-screen ">MY BLOG</p>
      <span className="flex items-center w-screen text-center justify-center my-4">
        <span className="text-s1">Welcome to the blog of </span>
        <span className="text-s1 text-white bg-black p-1 ml-1">unknown</span>
      </span>
    </div>
  );
}

export default Navbar;
