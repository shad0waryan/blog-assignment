import React from "react";

function Name3() {
  return (
    <div
      className="flex flex-col bg-white pb-4"
      style={{ boxShadow: " 0 3px 25px rgb(0 0 0 / 0.4" }}
    >
      <img
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <div className="flex flex-col items-start px-4 pb">
        <p className="text-s4 font-semibold my-2.5 ">My Name</p>
        <p className="text-start my-4">
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lobortis risus quis orci laoreet faucibus. Cras varius risus nisl, a porttitor augue rhoncus at. Etiam vel dui quis velit hendrerit porta. Nullam feugiat quam at massa viverra, sed sollicitudin est accumsan. Nulla venenatis est at semper maximus. In hac habitasse platea dictumst. Vestibulum diam mauris, bibendum at tincidunt sit amet, vehicula ut mi.
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

export default Name3;
