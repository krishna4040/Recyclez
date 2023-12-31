import { ImFacebook2, ImGoogle2, ImInstagram } from "react-icons/im";

const oauthProviders = [
  { name: "Google", iconname: ImGoogle2 },
  { name: "Facebook", iconname: ImFacebook2 },
  { name: "Instagram", iconname: ImInstagram },
];

const OAuth = () => {
  return (
    <>
      <div className="m-1 flex flex-col lg:flex-row">
        {oauthProviders.map((provider, index) => {
          return (
            <div key={index} className="px-3 py-2 m-2 shadow-md rounded-md bg-gradient-to-t hover:from-fuchsia-500 hover:via-pink-500 hover:to-rose-500 cursor-pointer flex flex-row items-center">
              <provider.iconname className="text-slate-900 text-xl m-1" />
              <span className="font-bold text-xl text-black m-1">
                Continue with{` ${provider.name}`}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OAuth;
