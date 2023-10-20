import Hamburger from "./Hamburger";
import CloseIcon from "./CloseIcon";
import { useState } from "react";

const Nav = ({ Links = [], imgSrc }) => {
  const [navLinkVisibility, setNavLinkVisibility] = useState(false);
  const linkWrapper = Links.map((value, index) => {
    return (
      <li
        key={index}
        className="p-1 m-1 text-xl text-white capitalize cursor-pointer font-navLinks"
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
        <div className="flex items-center justify-center p-2 m-2">
          {!navLinkVisibility ? (
            <Hamburger clickEvent={incNavWidth} />
          ) : (
            <CloseIcon clickEvent={decNavWidth} />
          )}
        </div>
        {!navLinkVisibility ? (
          <div className="flex items-center justify-center h-full">
            <div className="m-1 p-1 rotate-[-90deg]">
              <span className="p-1 text-4xl tracking-widest text-white">
                Innovation
              </span>
            </div>
          </div>
        ) : (
          <div className="p-1 m-1">
            <ul className="flex flex-col items-center justify-center p-1 m-1">
              {linkWrapper}
            </ul>
            <div className="flex items-center justify-center p-1 m-1">
              <div className="flex flex-col items-center justify-center p-1 m-1">
                <img src={imgSrc} alt="Logo" className="w-1/2 m-1 rounded-lg" />
                <span className="p-1 m-1 text-white text-md">
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
