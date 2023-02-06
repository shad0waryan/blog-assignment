import React from "react";

function Footer() {
  return (
    <div className="mt-4 py-8 px-4 bg-darkgrey">
      <div className="flex gap-1 items-center mb-4">
        <button
          disabled
          className="bg-grey hover:bg-darkgrey px-6 py-3 text-textgrey text-s1"
        >
          Previous
        </button>
        <button className="text-s1 bg-black hover:bg-hovergrey hover:cursor-not-allowed text-white px-6 py-3 flex items-center">
          Next <p className="text-[10px] ml-1">{">>"}</p>
        </button>
      </div>
      <div className="flex text-white text-start my-4 ">
        <p>Powered by </p>
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          className="underline ml-1"
        >
          w3.css
        </a>
      </div>
    </div>
  );
}

export default Footer;
