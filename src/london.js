import React from "react";
import "./App.css";
import Blog3 from "./components/Blog3";
import Footer from "./components/Footer";
import Name3 from "./components/Name3";
import Navbar from "./components/Navbar";
import Posts3 from "./components/Posts3";
import Tags3 from "./components/Tags3";
import Title3 from "./components/Title3";
import { Link } from "react-router-dom";
function London() {
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
          <Title3 />
          <Blog3 />
        </div>
        <div className="flex flex-col md:w-2/6 sm:w-full gap-8 pl-8 ">
          <Name3 />
          <Posts3 />
          <Tags3 />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default London;
