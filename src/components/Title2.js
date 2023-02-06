import React from "react";

function Title2() {
  return (
    <div
      className="flex flex-col bg-white pb-4"
      style={{ boxShadow: " 0 3px 25px rgb(0 0 0 / 0.4" }}
    >
      <img
        src="https://p0.pikist.com/photos/814/500/morning-golden-sun-yellow-sun-city-urban-waking-up-sunrise-sunlight.jpg"
        alt=""
      />
      <div className="flex flex-col items-start px-4 pb">
        <p className="text-s4 font-semibold my-2.5 ">TITLE HEADING</p>
        <span className=" flex text-s2 ">
          <p>Title Description, </p>
          <p className="text-lightblk font-thin ml-1">April 7, 2014</p>
        </span>
        <p className="text-start my-4">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
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

export default Title2;
