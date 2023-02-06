import React, { useContext } from "react";
import { BlogContext } from "../helper/context";
function Blog2() {
  const a = useContext(BlogContext);
  const { count, setCount } = a;
  return (
    <div
      className="flex flex-col bg-white pb-4"
      style={{ boxShadow: " 0 3px 25px rgb(0 0 0 / 0.4" }}
    >
      <img
        src="https://images.unsplash.com/photo-1606474226448-4aa808468efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80"
        alt=""
      />
      <div className="flex flex-col items-start px-4 pb">
        <p className="text-s4 font-semibold my-2.5 ">BLOG ENTRY</p>
        <span className=" flex text-s2 ">
          <p>Title Description, </p>
          <p className="text-lightblk font-thin ml-1">April 2, 2014</p>
        </span>
        <p className="text-start my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="flex justify-between items-center w-full">
          <button className="text-s1 px-6 py-3 border border-hovergrey hover:bg-hovergrey">
            {" "}
            READ MORE {">>"}
          </button>
          <span className="py-3 px-6 flex items-center">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="text-s1 font-semibold"
            >
              Comments
            </button>
            <span className="rounded-full px-2 bg-black text-white ml-2">
              {count}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Blog2;
