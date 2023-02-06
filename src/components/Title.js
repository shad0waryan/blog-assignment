import React from "react";

function Title() {
  return (
    <div
      className="flex flex-col bg-white pb-4"
      style={{ boxShadow: " 0 3px 25px rgb(0 0 0 / 0.4" }}
    >
      <img src="https://www.w3schools.com/w3images/woods.jpg" alt="" />
      <div className="flex flex-col items-start px-4 pb">
        <p className="text-s4 font-semibold my-2.5 ">TITLE HEADING</p>
        <span className=" flex text-s2 ">
          <p>Title Description, </p>
          <p className="text-lightblk font-thin ml-1">April 7, 2014</p>
        </span>
        <p className="text-start my-4">
          Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
          Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
          enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
          congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
          vitae justo condimentum, porta lectus vitae, ultricies congue gravida
          diam non fringilla.
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

export default Title;
