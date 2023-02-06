import React from "react";
import { Link } from "react-router-dom";
function Tags2() {
  return (
    <div
      className="flex flex-col bg-white"
      style={{ boxShadow: " 0 3px 25px rgb(0 0 0 / 0.4" }}
    >
      <div className="bg-bkground px-4 py-2">
        <p className=" text-start text-s3 my-2.5">Tags</p>
      </div>
      <div className="my-4 text-start px-4 py-2 flex flex-wrap gap-2">
        <Link to="/">
          <p className="bg-bkground text-black w-fit mb-4 px-2 text-s0">
            Travel
          </p>
        </Link>
        <Link to="/newYork">
          <p className="bg-black text-white w-fit mb-4 px-2 text-s1">
            New York
          </p>
        </Link>
        <Link to="/london">
          <p className="bg-bkground text-black w-fit mb-4 px-2 text-s0">
            London
          </p>
        </Link>
        <p className="bg-bkground text-black w-fit mb-4 px-2 text-s0">IKEA</p>
        <p className="bg-bkground text-black w-fit mb-4 px-2 text-s0">NORWAY</p>
        <p className="bg-bkground text-black w-fit mb-4 px-2 text-s0">DIY</p>
        <p className="bg-bkground text-black w-fit mb-4 px-2 text-s0">Ideas</p>
        <p className="bg-bkground text-black w-fit mb-4 px-2 text-s0">Baby</p>
        <p className="bg-bkground text-black w-fit mb-4 px-2 text-s0">Family</p>
        <p className="bg-bkground text-black w-fit mb-4 px-2 text-s0">News</p>
        <p className="bg-bkground text-black w-fit mb-4 px-2 text-s0">
          Clothing
        </p>
        <p className="bg-bkground text-black w-fit mb-4 px-2 text-s0">
          Shopping
        </p>
        <p className="bg-bkground text-black w-fit mb-4 px-2 text-s0">Games</p>
      </div>
    </div>
  );
}

export default Tags2;
