import Hamburger from "./Hamburger";
import CloseIcon from "./CloseIcon";
import { useState } from "react";

const Nav = ({ Links = [], imgSrc }) => {
  const [navLinkVisibility, setNavLinkVisibility] = useState(false);
  const linkWrapper = Links.map((value, index) => {
    return (
      <li
        key={index}
        className="cursor-pointer capitalize text-white text-xl p-1 m-1 font-navLinks"
      >
        {value}
      </li>
    );
  });

  const [navwidth, setNavwidth] = useState(75);
  const incNavWidth = () => {
    setNavwidth(navwidth + 100);
    setNavLinkVisibility(!navLinkVisibility);
  };
  const decNavWidth = () => {
    setNavwidth(navwidth - 100);
    setNavLinkVisibility(!navLinkVisibility);
  };

  return (
    <>
      <div
        className="fixed left-0 top-0 h-full bg-[#1b1b1b] transition-all duration-[.5s] ease-linear"
        style={{ width: navwidth }}
      >
        <div className="flex items-center justify-center m-2 p-2">
          {!navLinkVisibility ? (
            <Hamburger clickEvent={incNavWidth} />
          ) : (
            <CloseIcon clickEvent={decNavWidth} />
          )}
        </div>
        {!navLinkVisibility ? (
          <div className="h-full flex items-center justify-center">
            <div className="m-1 p-1 rotate-[-90deg]">
              <span className="p-1 text-white text-4xl tracking-widest">
                Innovation
              </span>
            </div>
          </div>
        ) : (
          <div className="p-1 m-1">
            <ul className="p-1 m-1 flex items-center justify-center flex-col">
              {linkWrapper}
            </ul>
            <div className="p-1 m-1 flex items-center justify-center">
              <div className="p-1 m-1 flex items-center justify-center flex-col">
                <img src={imgSrc} alt="Logo" className="w-1/2 rounded-lg m-1" />
                <span className="text-white text-md p-1 m-1">
                  &copy; Team MERN
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
