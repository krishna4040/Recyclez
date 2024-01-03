import { LOGO } from "../../RootImport.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeNav = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  return (
    <>
      <nav className="bg-black border-b-2 border-solid border-slate-100 w-full px-5 py-2 flex flex-row items-center justify-between">
        <h1
          className="flex flex-row items-center justify-between font-black cursor-pointer p-2 m-1 bg-white rounded-full text-slate-700 text-xl"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={LOGO}
            alt="logo"
            width={40}
            height={40}
            className="w-11 h-auto rounded-full shadow-sm mx-1"
          />
          Recyclez
        </h1>
        <div className="flex flex-row items-center justify-evenly mx-1">
          {token ? (
            <button
              type="button"
              onClick={() => {
                navigate("/user/dashboard");
              }}
              className="px-2 py-3 rounded-full text-white hover:underline mx-1"
            >
              Dashboard
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                navigate("/auth");
              }}
              className="px-2 py-3 rounded-full text-white hover:underline mx-1"
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default HomeNav;
