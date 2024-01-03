import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { setUser, WasteProductCard, UserCard } from "../../RootImport.js";

const Dashboard = () => {
  const dispacth = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const [oppoRole, setOppoRole] = useState([]);
  const [wastes, setWastes] = useState([]);

  const fecthUser = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}getCurrentUserDetails`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.data.success) {
        toast.error("unable to fecth user details");
      }
      const {
        _id,
        userName,
        email,
        contact,
        addedWaste,
        recycledWaste,
        requestedWaste,
      } = response.data.data;
      dispacth(
        setUser({
          _id,
          userName,
          email,
          contact,
          addedWaste,
          recycledWaste,
          requestedWaste,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const fecthOppositeRole = async () => {
    try {
      if (user.role === "Receiver") {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}getAllSuppliers`
        );
        setOppoRole(response.data.data);
      }
      if (user.role === "Supplier") {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}getAllReceivers`
        );
        setOppoRole(response.data.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("uable to fecth opposite role");
    }
  };

  const fecthWaste = async () => {
    try {
      if (user.role === "Receiver") {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}added-waste`
        );
        setWastes(response.data.data);
      }
      if (user.role === "Supplier") {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}requested-waste`
        );
        setWastes(response.data.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("unable to fecth wastes");
    }
  };

  useEffect(() => {
    fecthUser();
    fecthOppositeRole();
    fecthWaste();
  }, []);

  return (
    <>
      <div className="h-[100vh] flex lg:flex-row flex-col bg-green-300 ml-[75px]">
        <h1 className="hidden text-2xl font-semibold text-center lg:block">
          {user.role === "Receiver" ? "Our Suppliers" : "Our Receivers"}
        </h1>
        <div className="lg:w-[70%] w-full h-[100vh] bg-slate-200 overflow-y-auto p-2 flex flex-col md:flex-row flex-wrap">
          {oppoRole.length > 0 ? (
            oppoRole.map((value, index) => {
              return (
                <div
                  key={index}
                  className="m-2 border-2 border-black border-solid rounded-md w-fit h-fit"
                >
                  <UserCard
                    username={value.username}
                    email={value.email}
                    contact={value.contact}
                  />
                </div>
              );
            })
          ) : (
            <div className="loader"></div>
          )}
        </div>
        <div className="lg:w-[30%] w-full h-[100vh] bg-white overflow-y-auto p-2 flex flex-col items-center">
          <h1 className="hidden text-2xl font-semibold text-center underline lg:block">
            {user.role === "Receiver" ? "Added Waste" : "Requested Waste"}
          </h1>
          <div className="m-2 border-2 border-black border-solid rounded-md w-fit h-fit">
            {wastes.length > 0 ? (
              wastes.map((value, index) => {
                return (
                  <div key={index} className="m-2">
                    <WasteProductCard
                      category={value.category}
                      measuringUnit={value.measuringUnit}
                      amount={value.amount}
                      price={value.price}
                      departure={value.departure}
                    />
                  </div>
                );
              })
            ) : (
              <div className="loader"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
