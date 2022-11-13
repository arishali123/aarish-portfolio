import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [myStyle, setmyStyle] = useState({
    display: "none",
  });

  const togleStyle = () => {
    if (myStyle.display === "none") {
      setmyStyle({
        display: "flex",
      });
    } else {
      setmyStyle({
        display: "none",
      });
    }
  };

  return (
    <div>
      <header className="bg-gray-900 example text-white h-16 w-full  shadow-inner fixed top-0 left-0 right-0 z-10 ">
        <div className="flex flex-row mx-auto px-10 py-3 z-10 ">
          <div className="text-3xl  font-semibold basis-1/4 ">
            <Link to="/">{props.title}</Link>
          </div>
          <button
            className=" rounded bg-rose-400 px-3 ml-36 sm:ml-80 md:hidden"
            onClick={togleStyle}
          >
            Menu
          </button>
          <div className="basis-1/2 ">
            <div className="md:flex flex-row flex-auto justify-center py-2 hidden">
              <div className="px-5  text-md xl:text-xl">
                <Link to="/">Home</Link>
              </div>
              <div className="px-5 text-md xl:text-xl">
                <a href={"https://www.linkedin.com/in/aarish-ali-db/"}>
                  LinkedIn
                </a>
              </div>
              <div className="px-5 text-md xl:text-xl">
                <Link to="/About">About Me</Link>
              </div>

              <div className="px-5 text-md xl:text-xl">
                <Link to="/Contact">Contact</Link>
              </div>
            </div>
          </div>
          <div className="text-3xl basis-1/5 justify-self-center mx-auto hidden">
            Other
          </div>
        </div>
        <div
          className="w-full h-84  bg-gray-900 md:hidden sidebaranimation -z-10 "
          style={myStyle}
        >
          <div className="p-5 h-full  mx-auto">
            <div className="md:flex flex-row flex-auto justify-center py-2 text-md sm:text-xl">
              <div className="p-3 " onClick={togleStyle}>
                <Link to="/">Home</Link>
              </div>
              <div className="p-3 " onClick={togleStyle}>
                <a
                  href={
                    "https://www.linkedin.com/in/krishna-vishwakarma-a6071b1a2"
                  }
                >
                  LinkedIn
                </a>
              </div>
              <div className="p-3 " onClick={togleStyle}>
                <Link to="/About">About Me</Link>
              </div>
              <div className="p-3 " onClick={togleStyle}>
                <Link to="/Cheetsheet">Cheetsheet</Link>
              </div>
              <div className="p-3 " onClick={togleStyle}>
                <Link to="/Contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
