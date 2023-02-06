import React from "react";

function Name2() {
  return (
    <div
      className="flex flex-col bg-white pb-4"
      style={{ boxShadow: " 0 3px 25px rgb(0 0 0 / 0.4" }}
    >
      <img
        src="https://img.freepik.com/free-photo/portrait-serious-smiling-modern-indian-man-near-office-building_496169-2890.jpg?w=1060&t=st=1675699323~exp=1675699923~hmac=a875ef71be81d094367462359e2100a6f17af256f4bef722e19711e3a7f2d336"
        alt=""
      />
      <div className="flex flex-col items-start px-4 pb">
        <p className="text-s4 font-semibold my-2.5 ">My Name</p>
        <p className="text-start my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex justify-between items-center w-full">
          <button className="text-s1 px-6 py-3 border border-hovergrey hover:bg-hovergrey">
            {" "}
            READ MORE {">>"}
          </button>
          <span className="py-3 px-6 flex items-center">
            <p className="text-s1 font-semibold">Comments</p>
            <span className="px-2 bg-black text-white ml-2">0</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Name2;
