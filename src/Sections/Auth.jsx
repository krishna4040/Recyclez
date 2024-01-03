import { useState } from "react";
import { Login, Signup, OAuth } from "../RootImport.js";

const Auth = () => {
  const [signupstatus, setSignupstatus] = useState(true);

  return (
    <>
      <section className="w-full min-h-screen bg-gradient-to-b from-white via-yellow-300 to-orange-400 flex flex-col items-center">
        <div className="flex flex-col items-center justify-between">
          <h1 className="font-bold text-4xl m-2 text-black">
            Welcome to
            <span className="font-bold bg-gradient-to-r from-rose-400 to-red-500 text-transparent bg-clip-text text-6xl capitalize mx-2">
              Recyclez
            </span>
          </h1>
          <h2 className="text-sm m-2 text-slate-800 font-light">
            An end-to-end Waste Management System
          </h2>
        </div>
        <div className="m-3 w-full flex flex-col items-center">
          {signupstatus ? (
            <>
              <h3 className="text-2xl font-black text-slate-800 m-2">
                Don{`'`}t have an Account ?
              </h3>
              <Signup signUpStatus={setSignupstatus} />
              <p className="font-light text-base text-slate-600 m-2">
                Already have an Account.{" "}
                <span
                  className="text-black font-black cursor-pointer hover:underline text-lg"
                  onClick={() => {
                    setSignupstatus((prev) => !prev);
                  }}
                >
                  Login
                </span>
              </p>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-black text-slate-800 m-2">
                Already have an Account.
              </h3>
              <Login />
              <p className="font-light text-base text-slate-600 m-2">
                Don{`'`}t have an Account ?{" "}
                <span
                  className="text-black font-black cursor-pointer hover:underline text-lg"
                  onClick={() => {
                    setSignupstatus((prev) => !prev);
                  }}
                >
                  Sign Up
                </span>
              </p>
            </>
          )}
          <div className="w-full flex flex-row items-center justify-between max-w-md">
            <span className="w-full h-[0.51px] bg-slate-600 mx-2"></span>
            <span className="text-base text-slate-600 font-light mx-1 mb-1">
              or
            </span>
            <span className="w-full h-[0.51px] bg-slate-600 mx-2"></span>
          </div>
        </div>
        <div className="flex flex-col">
          <OAuth />
        </div>
      </section>
    </>
  );
};

export default Auth;
