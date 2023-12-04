import WasteProductCard from "../components/home/WasteProductCard";
import UserCard from "../components/home/UserCard";
import axios from 'axios'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import fakewastes from "./FakeWaste";

const Home = () => {

    const { token } = useSelector(state => state.user);
    const [user, setUser] = useState({});

    const fecthUser = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}getUserDetails`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUser(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fecthUser();
    }, []);

    const [oppoRole, setOppoRole] = useState([]);

    const fecthOppositeRole = async () => {
        try {
            if (user.role === 'Receiver') {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}getAllSuppliers`);
                setOppoRole(response.data.data);
            }
            if (user.role === 'Supplier') {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}getAllReceivers`);
                setOppoRole(response.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fecthOppositeRole();
    }, []);

    const [wastes, setWastes] = useState([]);
    const fecthWaste = async () => {
        try {
            if (user.role === 'Receiver') {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}suppliedWaste`);
                setWastes(response.data.data);
            }
            if (user.role === 'Supplier') {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}requestedWaste`);
                setWastes(response.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fecthWaste();
    }, []);

    return (
        <>
            <div className="h-[100vh] flex lg:flex-row flex-col bg-green-300 ml-[75px]">
                <h1 className="hidden text-2xl font-semibold text-center lg:block">{user.role === 'Receiver' ? 'Our Suppliers' : 'Our Receivers'}</h1>
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
                        <div></div>
                    )}
                </div>
                <div className="lg:w-[30%] w-full h-[100vh] bg-white overflow-y-auto p-2 flex flex-col items-center">
                    <h1 className="hidden text-2xl font-semibold text-center underline lg:block">{user.role === 'Receiver' ? 'Added Waste' : 'Requested Waste'}</h1>
                    <div className="m-2 border-2 border-black border-solid rounded-md w-fit h-fit">
                        {fakewastes.length > 0 ? (
                            fakewastes.map((value, index) => {
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
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
