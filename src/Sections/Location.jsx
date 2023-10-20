import { useState, useEffect } from "react";

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

  const buttonWrapper = (value) => {
    return (
      <button className="w-[190px] h-auto p-2 m-1 rounded-sm border-2 border-solid border-[#447908] bg-[#447908] text-white font-roboto capitalize text-xl md:bg-black md:border-black">
        {value}
      </button>
    );
  };

  return (
    <section className="w-full h-[100vh] bg-[#2ded74] p-2">
      <div className="bg-white p-1">
        <h1 className=" font-montserrat text-black text-3xl">Location</h1>
      </div>

      {/* Map */}

      {/* Longitude and Latitude */}
      <div className="p-1 m-1 bg-slate-50 flex flex-col items-center justify-center rounded-lg">
        <h3 className="text-xl font-pacifico text-black">
          Latitude: {latitude}
        </h3>
        <h3 className="text-xl font-pacifico text-black">
          Longitude: {longitude}
        </h3>
        {buttonWrapper("Next")}
      </div>
    </section>
  );
};

export default Location;
