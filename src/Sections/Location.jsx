import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setLocation } from '../store/slice/userSlice'
import axios from 'axios'
import MAP_IMG from "../assets/map.png";

const Location = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const navigate = useNavigate();
  const dispacth = useDispatch();

  const clickHandler = async () => {
    navigate('/');
  }

  const buttonWrapper = (value) => {
    return (
      <button onClick={clickHandler} className="w-[190px] h-auto p-2 m-1 rounded-sm border-2 border-solid border-[#447908] bg-[#447908] text-white font-roboto capitalize text-xl md:bg-black md:border-black">
        {value}
      </button>
    );
  };

  return (
    <section className="w-full h-[100vh] bg-[#2ded74] p-2">
      <div className="p-1">
        <h1 className="text-3xl text-center text-black font-montserrat">Location</h1>
      </div>

      {/* Map */}
      <div className="flex items-center justify-center w-full">
        <img src={MAP_IMG} alt="Map" className="w-1/2 mx-auto ml-[180px] border-2 border-solid border-black p-1" />
      </div>

      {/* Longitude and Latitude */}
      <div className="flex flex-col items-center justify-center p-1 m-1 rounded-lg bg-slate-50">
        <h3 className="text-xl text-black font-pacifico">
          Latitude: {latitude}
        </h3>
        <h3 className="text-xl text-black font-pacifico">
          Longitude: {longitude}
        </h3>
        {buttonWrapper("Next")}
      </div>
    </section>
  );
};

export default Location;
