import Hamburger from "./Hamburger";
import CloseIcon from "./CloseIcon";
import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { setToken } from '../../store/slice/authSlice'

import imgSrc from '../../assets/bg.png'
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const Nav = () => {
  const [navLinkVisibility, setNavLinkVisibility] = useState(false);
  const user = useSelector(state => state.user);

  const Links = [
    { title: 'Home', linkto: '/' },
    { title: 'Profile', linkto: '/profile' },
    { title: `${user.role === 'Receiver' ? 'Request waste' : 'Add Waste'}`, linkto: `${user.role === 'Receiver' ? '/waste/request-waste' : '/waste/add-waste'}` },
  ]

  const dispacth = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispacth(setToken(null));
    navigate('/');
    toast.success('Logout Successfull');
  }

  const linkWrapper = Links.map((value, index) => {
    return (
      <NavLink to={value.linkto} key={index}>
        <li className="p-1 m-1 text-xl text-center text-white capitalize cursor-pointer font-navLinks">
          {value.title}
        </li>
      </NavLink>
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
                Recyclez
              </span>
            </div>
          </div>
        ) : (
          <div className="p-1 m-1">
            <ul className="flex flex-col items-center justify-center p-1 m-1">
              {linkWrapper}
              <p onClick={logoutHandler} className="p-1 m-1 text-xl text-center text-white capitalize cursor-pointer font-navLinks">Logout</p>
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
