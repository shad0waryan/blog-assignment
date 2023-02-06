import React, { useContext } from "react";
import { BlogContext } from "../helper/context";
function Blog3() {
  const a = useContext(BlogContext);
  const { count, setCount } = a;
  return (
    <div
      className="flex flex-col bg-white pb-4"
      style={{ boxShadow: " 0 3px 25px rgb(0 0 0 / 0.4" }}
    >
      <img
        src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80"
        alt=""
      />
      <div className="flex flex-col items-start px-4 pb">
        <p className="text-s4 font-semibold my-2.5 ">BLOG ENTRY</p>
        <span className=" flex text-s2 ">
          <p>Title Description, </p>
          <p className="text-lightblk font-thin ml-1">April 2, 2014</p>
        </span>
        <p className="text-start my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean enim
          enim, suscipit at ornare eu, volutpat nec tellus. Suspendisse id quam
          eros. Mauris auctor imperdiet magna sed interdum. Maecenas ultrices
          libero id pretium egestas. Pellentesque porttitor luctus euismod.
          Vivamus aliquet condimentum leo, convallis auctor mi imperdiet eget.
          Maecenas pellentesque augue et mauris placerat, sit amet eleifend quam
          volutpat. Ut venenatis sit amet velit non tempor. Vestibulum ut ipsum
          at urna efficitur lacinia. Vivamus ullamcorper mollis sodales. Aenean
          eget aliquam metus, ac consectetur massa. Sed non libero et nibh
          sodales maximus cursus a diam. Praesent eu iaculis justo, at dignissim
          metus. Nunc eget lectus est. Vivamus id tincidunt enim, sit amet
          tincidunt ligula. Ut vel vulputate mauris.
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

export default Blog3;
