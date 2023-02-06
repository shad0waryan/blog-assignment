import React from "react";
import "./App.css";
import Blog2 from "./components/Blog2";
import Footer from "./components/Footer";
import Name2 from "./components/Name2";
import Navbar from "./components/Navbar";
import Posts2 from "./components/Posts2";
import Tags2 from "./components/Tags2";
import Title2 from "./components/Title2";
import { Link } from "react-router-dom";
function NewYork() {
  return (
    <div className="App overflow-y-scroll bg-bkground w-screen h-screen ">
      <div className="pl-8 ">
        <Navbar />
      </div>
      <div className="content__flex flex gap-8 justify-center pl-8 ">
        <div className="flex flex-col md:w-3/5 sm:w-full gap-8">
          <Link to="/">
            <button className="text-s1 bg-black hover:bg-hovergrey hover:cursor-pointer text-white px-6 py-3 flex items-center w-fit">
              Home
            </button>
          </Link>
          <Title2 />
          <Blog2 />
        </div>
        <div className="flex flex-col md:w-2/6 sm:w-full gap-8 pl-8 ">
          <Name2 />
          <Posts2 />
          <Tags2 />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default NewYork;
