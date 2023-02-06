import React from "react";

function Posts() {
  return (
    <div
      className="flex flex-col bg-white"
      style={{ boxShadow: " 0 3px 25px rgb(0 0 0 / 0.4" }}
    >
      <div className="bg-bkground px-4 py-2">
        <p className=" text-start text-s3 my-2.5">Popular Posts</p>
      </div>
      <ul className="flex flex-col">
        <li className="flex items-center justify-start p-4 hover:bg-hovergrey border-b border-hovergrey">
          <img
            src="https://www.w3schools.com/w3images/workshop.jpg"
            alt=""
            width={"50px"}
            height={"50px"}
            className="pr-4"
          />
          <div className="flex flex-col items-start">
            <p className="text-s2">Lorem</p>
            <p className="text-s1">Sed mattis nunc</p>
          </div>
        </li>
        <li className="flex items-center justify-start p-4 hover:bg-hovergrey border-b border-hovergrey ">
          <img
            src="https://www.w3schools.com/w3images/gondol.jpg"
            alt=""
            width={"50px"}
            height={"50px"}
            className="pr-4"
          />
          <div className="flex flex-col items-start">
            <p className="text-s2">Ipsum</p>
            <p className="text-s1">Praes tinci sed</p>
          </div>
        </li>
        <li className="flex items-center justify-start p-4 hover:bg-hovergrey border-b border-hovergrey ">
          <img
            src="https://www.w3schools.com/w3images/skies.jpg"
            alt=""
            width={"50px"}
            height={"50px"}
            className="pr-4"
          />
          <div className="flex flex-col items-start">
            <p className="text-s2">Dorum</p>
            <p className="text-s1">Ultricies congue</p>
          </div>
        </li>
        <li className="flex items-center justify-start p-4 hover:bg-hovergrey ">
          <img
            src="https://www.w3schools.com/w3images/rock.jpg"
            alt=""
            width={"50px"}
            height={"50px"}
            className="pr-4"
          />
          <div className="flex flex-col items-start">
            <p className="text-s2">Mingsum</p>
            <p className="text-s1">Lorem ipsum dipsum</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Posts;
