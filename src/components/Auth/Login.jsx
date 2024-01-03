import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../RootImport.js";

const Login = () => {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validate = () => {
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) return false;
    });
    return true;
  };

  const sumbitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!validate()) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      dispacth(setToken(response?.data?.data));
      if (!response?.data?.success) {
        toast.error("unable to login in");
      }

      toast.success("Logged in successfully");
      navigate("/user/dashboard");
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col items-start justify-between w-full max-w-md gap-5 p-3 md:bg-white m-2 md:shadow-md border-2 border-solid border-transparent md:border-yellow-400 rounded-lg"
      onSubmit={sumbitHandler}
    >
      <div className="flex flex-col w-full">
        <label
          htmlFor="email"
          className="text-base font-thin text-black capitalize"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="abc@gmail.com"
          autoComplete="off"
          value={formData?.email}
          onChange={handleChange}
          className="border-2 border-solid border-yellow-400 outline-none px-3 py-4 m-2 rounded-md shadow-md"
          required
        />
      </div>
      <div className="flex flex-col w-full">
        <label
          htmlFor="password"
          className="text-base font-thin text-black capitalize"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="########"
          autoComplete="off"
          value={formData?.password}
          onChange={handleChange}
          className="border-2 border-solid border-yellow-400 outline-none px-3 py-4 m-2 rounded-md shadow-md"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="capitalize px-3 py-4 bg-pink-600 hover:bg-pink-500 font-semibold text-white rounded-md disabled:cursor-wait w-full"
      >
        {loading ? <>Processing...</> : <>Login</>}
      </button>
    </form>
  );
};

export default Login;
