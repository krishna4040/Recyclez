import WasteProductCard from "../components/home/WasteProductCard";
import UserCard from "../components/home/UserCard";
import axios from 'axios'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react'

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
            if (user.role === 'Receiver') {
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
            if (user.role === 'Receiver') {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}requestedWaste`);
                setWastes(response.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fecthWaste();
    },[]);

    console.log(wastes,oppoRole);

    return (
        <>
            <div className="h-[100vh] flex flex-row bg-red-300 ml-[75px]">
                <div className="w-[70%] h-[100vh] bg-slate-200 overflow-y-auto p-2 flex flex-col md:flex-row">
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
                <div className="w-[30%] h-[100vh] bg-white overflow-y-auto p-2 flex flex-col items-center">
                    <div className="m-2 border-2 border-black border-solid rounded-md w-fit h-fit">
                        {wastes.length > 0 ? (
                            wastes.map((value, index) => {
                                return (
                                    <div key={index}>
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
