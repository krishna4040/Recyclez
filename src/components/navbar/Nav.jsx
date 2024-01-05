import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setToken, LOGO } from "../../RootImport.js";
import { MdDashboardCustomize } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { RiLogoutBoxFill } from "react-icons/ri";
import Hamburger from "./Hamburger";
import CloseIcon from "./CloseIcon";

const Links = [
  {
    title: "Dashboard",
    linkto: "/user/dashboard",
    iconname: MdDashboardCustomize,
  },
  { title: "Profile", linkto: "/user/profile", iconname: ImProfile },
];

const Nav = () => {
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const [navwidth, setNavwidth] = useState(100);
  const [navLinkVisibility, setNavLinkVisibility] = useState(false);

  const logoutHandler = () => {
    dispacth(setToken(null));
    navigate("/");
    toast.success("Logout Successfull");
  };

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
      <nav className="bg-gray-800 border-gray-700">
        {/* Mobile View */}
        <div className="lg:hidden w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={LOGO}
              width={30}
              height={30}
              className="w-8 h-auto rounded-sm"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Recyclez
            </span>
          </NavLink>
          <Hamburger
            clickEvent={() => {
              setMobileNavIsOpen((prev) => !prev);
            }}
          />
          {mobileNavIsOpen ? (
            <div className="w-full">
              <ul className="flex flex-col font-medium mt-4 rounded-lg rtl:space-x-reverse bg-gray-800 border-gray-700">
                {Links.map((link, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to={link.linkto}
                        onClick={() => {
                          setMobileNavIsOpen((prev) => !prev);
                        }}
                      >
                        <span className="block py-2 px-3 rounded hover:bg-gray-700 text-white">
                          {link.title}
                        </span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>

        {/* Desktop View */}
        <div
          className="hidden lg:flex flex-col items-center justify-between h-screen transition-all duration-[.5s] ease-linear p-2"
          style={{ width: navwidth }}
        >
          <div className="flex flex-col items-center p-1 w-full h-full">
            {!navLinkVisibility ? (
              <Hamburger
                clickEvent={() => {
                  incNavWidth();
                }}
              />
            ) : (
              <CloseIcon
                clickEvent={() => {
                  decNavWidth();
                }}
              />
            )}
            <div className="mt-5 flex flex-col justify-evenly w-full">
              <ul className="flex flex-col font-medium rounded-lg bg-gray-800 border-gray-700">
                {Links.map((link, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to={link.linkto}
                        onClick={() => {
                          setMobileNavIsOpen((prev) => !prev);
                        }}
                      >
                        <span
                          type="button"
                          className="rounded hover:bg-gray-700 text-white p-2 mt-1 cursor-pointer flex flex-row items-center justify-between"
                        >
                          {navLinkVisibility && link.title}
                          <link.iconname className="text-white text-2xl font-black mx-1" />
                        </span>
                      </NavLink>
                    </li>
                  );
                })}
                <li>
                  <span
                    type="button"
                    onClick={logoutHandler}
                    className="rounded hover:bg-gray-700 text-white p-2 mt-1 cursor-pointer flex flex-row items-center justify-between"
                  >
                    {navLinkVisibility && <>Logout</>}
                    <RiLogoutBoxFill className="text-white text-2xl font-black mx-1" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex items-center flex-col">
            <NavLink to={"/"} className="flex flex-col items-center">
              <img
                src={LOGO}
                width={30}
                height={30}
                className="w-8 h-auto rounded-sm"
                alt="Logo"
                draggable={false}
              />
              <span className="text-xl font-semibold whitespace-nowrap text-white">
                Recyclez
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
