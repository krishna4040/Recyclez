import React, { useState } from "react";
import Card from "./Card";
import eWaste from '../../assets/e-waste.jpg'
import foodWaste from '../../assets/food-waste.jpg'
import plasticWaste from '../../assets/plastic-waste.jpg'

const AddWaste = () => {
    const [state, setState] = useState({
        category: "",
        measuringUnit: "",
        amount: 0,
        price: 0,
        time: new Date
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#abffa3] w-full h-full p-2 "
        >
            <div className="bg-white p-1 ml-[75px] m-1">
                <h1 className="text-3xl font-extrabold text-black font-tiltNeon">
                    Category
                </h1>
                <div className="flex flex-col items-center m-2 justify-evenly md:flex-row">
                    <Card imgSrc={eWaste} text={"E-waste"} />
                    <Card imgSrc={foodWaste} text={"Food Waste"} />
                    <Card imgSrc={plasticWaste} text={"Plastic Waste"} />
                </div>
            </div>
            <div className="bg-white p-1 ml-[75px] m-1">
                <h1 className="text-3xl font-extrabold text-black font-tiltNeon">
                    Measuring Unit
                </h1>
                <div className="flex flex-row items-center m-2 justify-evenly">
                    <select
                        id="mu"
                        name="measuringunit"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                        <option defaultValue={""} defaultChecked={true}>
                            Choose a unit
                        </option>
                        <option value="kg">Kg(kilogram)</option>
                        <option value="pcs">pcs(Count)</option>
                    </select>
                </div>
            </div>
            <div className="bg-white p-1 ml-[75px] m-1">
                <h1 className="text-3xl font-extrabold text-black font-tiltNeon">
                    Amount
                </h1>
                <div className="flex flex-row items-center justify-center m-2">
                    <label className="p-1 m-2">Amount(Quantity):</label>
                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        value={state.amount}
                        onChange={handleInputChange}
                        className="border-2 border-solid border-md p-1 w-[130px]"
                    />
                </div>
            </div>
            <div className="bg-white p-1 ml-[75px] m-1">
                <h1 className="text-3xl font-extrabold text-black font-tiltNeon">
                    Set Price
                </h1>
                <div className="flex flex-row items-center justify-center m-2">
                    <label className="p-1 m-2">Price(Rs.):</label>
                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        value={state.price}
                        onChange={handleInputChange}
                        className="border-2 border-solid border-md p-1 w-[130px]"
                    />
                </div>
            </div>
            <div className="bg-white p-1 ml-[75px] m-1">
                <h1 className="text-3xl font-extrabold text-black font-tiltNeon">
                    Time
                </h1>
                <div className="flex flex-row items-center justify-center m-2">
                    <label className="p-1 m-2">Schedule departure:</label>
                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        value={state.time}
                        onChange={handleInputChange}
                        className="border-2 border-solid border-md p-1 w-[130px]"
                    />
                </div>
            </div>
            <div className="ml-[80px] m-2">
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                    Request
                </button>
            </div>
        </form>
    );
};

export default AddWaste;