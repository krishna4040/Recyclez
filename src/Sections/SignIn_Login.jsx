import { useState } from "react";
import BG_IMG from "../assets/bg2.jpg";

const SignIn_Login = () => {
  const [usersecret, setUsersecret] = useState("secret");
  const [userconfsecret, setUserconfsecret] = useState("secret");
  const [signupstatus, setSignupstatus] = useState(true);

  const btnClass =
    "capitalize border-2 border-solid border-black rounded-md p-1 text-black text-lg m-2 font-montserrat";

  const loginInputWrapper = (value, type, defaultVal = "", func) => {
    return (
      <input
        type={type}
        name={value}
        value={defaultVal}
        onChange={(e) => {
          func(e.target.value);
        }}
        className="w-[190px] h-auto p-2 rounded-sm border-2 border-solid border-[#000000] m-2 outline-none font-tiltNeon bg-transparent text-xl placeholder:text-black"
        placeholder={value}
        autoComplete="off"
      />
    );
  };

  const buttonWrapper = (value) => {
    return (
      <button className="w-[190px] h-auto p-2 m-1 rounded-sm border-2 border-solid border-[#447908] bg-[#447908] text-white font-roboto capitalize text-xl md:bg-black md:border-black">
        {value}
      </button>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (usersecret != userconfsecret) {
      console.log("Password do not match");
    } else {
      console.log("Password matched");
    }
  };

  return (
    <>
      <section className="w-full h-[100vh] bg-[#000000] p-4">
        <div
          className="bg-white w-full h-full rounded-md"
          style={{
            background: `url(${BG_IMG})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center flex-row p-1 m-1">
              <button
                className={btnClass}
                onClick={() => {
                  setSignupstatus(!signupstatus);
                }}
              >
                {signupstatus ? (
                  <>Already have account, login</>
                ) : (
                  <>Do not have account, signup</>
                )}
              </button>
            </div>
            <div className="w-full h-[85vh] mt-3 p-1 flex items-center justify-center flex-col">
              {signupstatus == true ? (
                <>
                  {loginInputWrapper("username", "text")}
                  {loginInputWrapper("email", "email")}
                  {loginInputWrapper("phone num", "number")}
                  {loginInputWrapper(
                    "secret",
                    "password",
                    usersecret,
                    setUsersecret
                  )}
                  {loginInputWrapper(
                    "confirm secret",
                    "password",
                    userconfsecret,
                    setUserconfsecret
                  )}
                  {buttonWrapper("signup")}
                </>
              ) : (
                <>
                  {loginInputWrapper("email", "email")}
                  {loginInputWrapper("secret", "password")}
                  {buttonWrapper("login")}
                </>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn_Login;
