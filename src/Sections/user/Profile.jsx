import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user.userName,
    email: user.email,
    contact: user.contact[0],
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setLoading(false);
  };

  return (
    <section className="w-full lg:h-screen min-h-screen overflow-x-hidden overflow-y-auto bg-gradient-to-b from-fuchsia-100 via-pink-300 to-rose-500 flex flex-col items-center">
      <h1 className="font-black text-fuchsia-900 text-6xl md:7xl lg:text-9xl p-3 m-2 flex flex-col items-start w-full">
        Profile
        <span className="text-xs md:text-sm font-thin text-gray-700 mx-1">
          Set up your profile, others can see this.
        </span>
      </h1>
      <div className="flex flex-col w-full p-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mb-4"
        >
          <div className="flex flex-col w-full">
            <label
              htmlFor="name"
              className="text-base font-thin text-black capitalize"
            >
              name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Karan Yadav"
              autoComplete="off"
              value={formData?.name}
              onChange={handleChange}
              className="border-2 border-solid border-fuchsia-400 outline-none px-3 py-4 m-2 rounded-md shadow-md"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-base font-thin text-black capitalize"
            >
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              autoComplete="off"
              value={formData?.email}
              onChange={handleChange}
              className="border-2 border-solid border-fuchsia-400 outline-none px-3 py-4 m-2 rounded-md shadow-md"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="contact"
              className="text-base font-thin text-black capitalize"
            >
              contact number
            </label>
            <input
              type="tel"
              name="contact"
              id="contact"
              placeholder="1029384756"
              autoComplete="off"
              value={formData?.contact}
              onChange={handleChange}
              className="border-2 border-solid border-fuchsia-400 outline-none px-3 py-4 m-2 rounded-md shadow-md"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="password"
              className="text-base font-thin text-black capitalize"
            >
              password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="########"
              autoComplete="off"
              value={formData?.password}
              onChange={handleChange}
              className="border-2 border-solid border-fuchsia-400 outline-none px-3 py-4 m-2 rounded-md shadow-md"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="self-start mx-4 capitalize px-3 py-4 bg-blue-600 hover:bg-blue-500 font-semibold text-white rounded-md disabled:cursor-wait"
          >
            {loading ? <>Processing...</> : <>Update Profile</>}
          </button>
        </form>
        <div className="w-full">
          <h3 className="text-base font-thin text-black capitalize">
            Location:
          </h3>
          <button
            type="button"
            onClick={() => {
              navigate("/user/location");
            }}
            className="m-3 px-3 py-4 text-white bg-black rounded-full font-black text-lg"
          >
            Set Up Location
          </button>
          <h3 className="text-base font-thin text-black capitalize">
            Role <span className="text-black font-black">{`(`}</span>
            Supplier/Receiver
            <span className="text-black font-black">{`)`}</span>:
          </h3>
          <button
            type="button"
            onClick={() => {
              navigate("/user/role");
            }}
            className="m-3 px-3 py-4 text-white bg-black rounded-full font-black text-lg"
          >
            Select your Role
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
