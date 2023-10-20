import { useNavigate } from "react-router-dom";
import BG_IMG from "../assets/bg.png";
import BG_IMG3 from "../assets/bg3.png";
import axios from 'axios'
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Know_Me = () => {
  const knowMeBoxes = (text, imgSrc, clickEvent) => {
    return (
      <div
        className="p-1 w-full h-[30vh] md:h-[60vh] md:m-7 flex items-center justify-center flex-col cursor-pointer border-2 border-solid border-black rounded-md m-1"
        onClick={clickEvent}
        style={{
          background: `url(${imgSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <span className="text-[4em] uppercase  font-pacifico p-1 text-black bg-[#b3b1b192] rounded-md">
          {text}
        </span>
      </div>
    );
  };

  const navigate = useNavigate();
  const { token } = useSelector(state => state.user);

  const recClickHandler = async () => {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}selectRole`, { role: "Receiver" }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    toast.success('You are a receiver');
    navigate('/');
  }
  
  const supClickHandler = async () => {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}selectRole`, { role: "Supplier" }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    toast.success('You are a supplier');
    navigate('/');
  }

  return (
    <>
      <section className="w-full h-[100vh] bg-[#0c9f42] p-2">
        <div className="flex flex-col items-center justify-center p-1 border-solid border-b-2 border-white transition-all duration-[.5s] ease-in animate-bounce">
          <h1 className="text-3xl text-white font-roboto">
            Tell us, Who are you?
          </h1>
        </div>

        <div className="p-1 m-2 flex flex-col md:flex-row h-[85vh] items-center justify-center">
          {knowMeBoxes("Supplier", BG_IMG, supClickHandler)}
          {knowMeBoxes("Receiver", BG_IMG3, recClickHandler)}
        </div>
      </section>
    </>
  );
};

export default Know_Me;