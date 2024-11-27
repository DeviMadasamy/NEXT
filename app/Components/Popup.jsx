"use client"
import React, { useState, } from "react";
import Button from "./Button";

const Popup = ({ onClose, onAdd, fieldTypes }) => {
    const [formData, setFormData] = useState(
        fieldTypes = {
            "Post Date": "date",
            "Total Hour": "number",
            "From Company": "text",
            "To Company": "text",
            "Client Rate": "number",
            "Contractor Rate": "number",
            "Generation Type": {
                type: "select",
                options: ["Timesheet", "Expenses"],
            },
            "Funding Type": {
                type: "select",
                options: ["Funded", "Paid When Paid"],
            },
            "Payment Terms": {
                type: "select",
                options: ["7 Days", "14 Days", "30 Days"],
            },
            "Currency Type": {
                type: "select",
                options: ["USD", "EUR", "GBP", "INR"],
            },
            "Update PO": "number",
        }
    );
    const [calculatedData, setCalculatedData] = useState(null);

    const handleChange = (e) => {
        console.log(e.target);

        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleCalculate = () => {
        const totalHours = parseFloat(formData["Total Hour"] || 0);
        const contractorRate = parseFloat(formData["Contractor Rate"] || 0);
        const clientRate = parseFloat(formData["Client Rate"] || 0);
        const vatPercentage = 20;


        const netAmount = totalHours * contractorRate;
        const netAmount2 = totalHours * clientRate;
        const vatAmount = (netAmount * vatPercentage) / 100;
        const vatAmount2 = (netAmount2 * vatPercentage) / 100;
        const totalAmount = netAmount + vatAmount;
        const totalAmount2 = netAmount2 + vatAmount2;
        const Status = "Open";


        setCalculatedData({
            Status,
            netAmount,
            vatAmount,
            totalAmount,
            netAmount2,
            vatAmount2,
            totalAmount2,

        });
    };

    const handleSubmit = () => {
        const newEntry = {
            id: Date.now(),
            ...formData,
            ...calculatedData,
        };
        onAdd(newEntry);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center font-serif">
            <div className="popup p-6  overflow-y-auto  rounded-md shadow-md w-4/5 h-4/5 font-mono"
                style={{
                    backgroundImage: "url('newbg.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}>
                <h2 className="text-xl font-bold  text-black-900 text-center ">
                    Add Invoice
                    <span onClick={onClose}
                        className="float-right cursor-pointer text-red-500">
                        &times;
                    </span>
                </h2>

                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-3 ml-24 mt-4">
                        {Object.keys(formData).map((key, index) => (
                            <div key={key} className="flex flex-col">
                                <label
                                    htmlFor={key}
                                    className="text-sm font-medium text-gray-700 capitalize"
                                >
                                    {key}
                                </label>

                                {fieldTypes[key]?.type === "select" ? (
                                    <select
                                        id={key}
                                        name={key}
                                        value={formData[key]}
                                        onChange={handleChange}
                                        className="mt-1 p-1 text-sm  w-4/6 flex text-black-400 border border-gray-300 rounded-md shadow-lg focus:ring-blue-500 focus:border-blue-500"
                                        required={true}
                                    >
                                        <option value="">Select an option</option>
                                        {fieldTypes[key].options.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        id={key}
                                        name={key}
                                        value={formData[key]}
                                        onChange={handleChange}
                                        type={fieldTypes[key] || "text"}
                                        placeholder="Enter Here.."
                                        className="mt-1 p-1 text-sm  w-4/6 flex text-black-400 border border-gray-300 rounded-md shadow-lg focus:ring-blue-500 focus:border-blue-500"
                                        required={true}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 flex">
                        <Button
                            style={" ml-96 px-6 py-2 shadow-xl bg-gray-500 text-white-900 rounded-2xl   hover:bg-red-500 hover:underline underline-offset-4 hover:text-white"}
                            onClick={handleCalculate}
                        >Calculate

                        </Button>
                    </div>

                    <div className="mt-16 ml-2 flex justify-between gap-2">
                        <Button
                            style={" px-4 py-2 shadow-xl bg-red-400 text-white-900 rounded-2xl   hover:bg-red-500 hover:underline underline-offset-4 hover:text-white"}
                            onClick={onClose}>

                            Cancel</Button>
                        <Button
                            style={"px-4 py-2 shadow-xl bg-green-400 text-white-900 rounded-2xl float-right hover:bg-green-500 hover:underline underline-offset-4 hover:text-white"}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </form>

                {/* <form action="" onSubmit={handleSubmit}>
    <div className="grid grid-cols-2 gap-6">
        {Object.keys(formData).map((key, index) => (
            <div key={key} className="flex flex-col">
                <label
                    htmlFor={key}
                    className="text-sm font-medium text-gray-700 capitalize"
                >
                    {key}
                </label>
                {fieldTypes[key]?.type === "select" ? (
                    <select
                        id={key}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md shadow-md focus:ring-blue-500 focus:border-blue-500"
                        required={true}
                    >
                        <option value="">Select an option</option>
                        {fieldTypes[key].options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        id={key}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        type={fieldTypes[key]?.type || "text"} // Default to "text"
                        className="mt-1 p-2 border border-gray-300 rounded-md shadow-md focus:ring-blue-500 focus:border-blue-500"
                        required={true}
                    />
                )}
            </div>
        ))}
    </div>

    <div className="flex justify-between gap-4 mt-6">
        <button
            className="ml-2 px-4 py-2 shadow-xl bg-red-400 text-white rounded-2xl hover:bg-red-500 hover:underline"
            onClick={onClose}
        >
            Cancel
        </button>
        <button
            type="submit"
            className="px-4 py-2 shadow-xl bg-green-400 text-white rounded-2xl hover:bg-green-500 hover:underline"
        >
            {fieldTypes ? "Save" : "Add"}
        </button>
    </div>
</form> */}

            </div>
        </div>
    );
};

export default Popup;
