import { useState } from "react";
import BG_IMG from "../assets/bg2.jpg";
import Login from '../components/Auth/Login'
import Signup from '../components/Auth/Signup'

const Auth = () => {
  const [signupstatus, setSignupstatus] = useState(true);

  return (
    <>
      <section className="w-full h-screen bg-[#000000] p-4">
        <div className="w-full h-full bg-white bg-no-repeat bg-cover rounded-md" style={{ background: `url(${BG_IMG})` }}>
          <div>
            <div className="flex flex-row items-center justify-center p-1 m-1">
              <button
                className="p-1 m-2 text-lg text-black capitalize border-2 border-black border-solid rounded-md font-montserrat"
                onClick={() => {
                  setSignupstatus(!signupstatus);
                }}
              >
                {signupstatus ? (<p>Login instead</p>) : (<p>Signup instead</p>)}
              </button>
            </div>
            <div className="w-full h-[85vh] mt-3 p-1 flex items-center justify-center flex-col">
              {signupstatus ? <Signup setSignupstatus={setSignupstatus} /> : <Login />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;
