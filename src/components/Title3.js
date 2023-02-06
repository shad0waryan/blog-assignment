import React from "react";

function Title3() {
  return (
    <div
      className="flex flex-col bg-white pb-4"
      style={{ boxShadow: " 0 3px 25px rgb(0 0 0 / 0.4" }}
    >
      <img
        src="https://p0.pikist.com/photos/603/640/taxi-cab-traffic-cab-new-york-street-road-nyc-new-york-city-downtown.jpg"
        alt=""
      />
      <div className="flex flex-col items-start px-4 pb">
        <p className="text-s4 font-semibold my-2.5 ">TITLE HEADING</p>
        <span className=" flex text-s2 ">
          <p>Title Description, </p>
          <p className="text-lightblk font-thin ml-1">April 7, 2014</p>
        </span>
        <p className="text-start my-4">
          Vivamus dictum scelerisque tellus ut sagittis. Vestibulum id orci eget
          neque fermentum commodo sed sit amet urna. In nec ipsum nunc. Quisque
          turpis elit, feugiat vitae mollis eu, ornare eget ex. Maecenas
          accumsan fermentum sapien quis finibus. Fusce dapibus convallis
          ultrices. Sed ac orci fringilla orci pretium faucibus. Vivamus nisi
          tellus, dignissim non finibus a, egestas efficitur sapien. Quisque eu
          ligula libero. Integer est dolor, iaculis eget nulla non, rutrum
          mollis mi.
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

export default Title3;
