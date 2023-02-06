import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Name from "./components/Name";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Tags from "./components/Tags";
import Title from "./components/Title";
import { BlogContext } from "./helper/context";

export const MyBLog = (props) => {
  const [count, setCount] = useState(0);

  return (
    <BlogContext.Provider value={{ count, setCount }}>
      {props.children}
    </BlogContext.Provider>
  );
};

function App() {
  return (
    <div className="App overflow-y-scroll bg-bkground w-screen h-screen ">
      <div className="pl-8 ">
        <Navbar />
      </div>
      <div className="content__flex flex gap-8 justify-center pl-8 ">
        <div className="flex flex-col md:w-3/5 sm:w-full gap-8">
          <Title />
          <Blog />
        </div>
        <div className="flex flex-col md:w-2/6 sm:w-full gap-8 pl-8 ">
          <Name />
          <Posts />
          <Tags />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
