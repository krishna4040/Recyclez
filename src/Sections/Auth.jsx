import { useState } from "react";
import BG_IMG from "../assets/bg2.jpg";
import Login from '../components/Auth/Login'
import Signup from '../components/Auth/Signup'

const Auth = () => {
  const [signupstatus, setSignupstatus] = useState(true);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

  };
  const btnClass = "capitalize border-2 border-solid border-black rounded-md p-1 text-black text-lg m-2 font-montserrat";

  return (
    <>
      <section className="w-full h-[100vh] bg-[#000000] p-4">
        <div
          className="w-full h-full bg-white rounded-md"
          style={{
            background: `url(${BG_IMG})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <div className="flex flex-row items-center justify-center p-1 m-1">
              <button
                className={btnClass}
                onClick={() => {
                  setSignupstatus(!signupstatus);
                }}
              >
                {signupstatus ? (<p>Do not have account, signup</p>) : (<p>Already have account, login</p>)}
              </button>
            </div>
            <div className="w-full h-[85vh] mt-3 p-1 flex items-center justify-center flex-col">
              {signupstatus ? <Login setSignupstatus={setSignupstatus} /> : <Signup setSignupstatus={setSignupstatus} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;
