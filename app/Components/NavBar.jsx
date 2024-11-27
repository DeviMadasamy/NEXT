"use client";
import React from "react";
import Button from "./Button";
import ActionBtn from "./ActionBtn";
import { useState } from "react";
import Popup from "./Popup";
import Table from "./Table";

export default function NavBar(props) {
    const [data, setData] = useState([]);
    const [showPopup, setShowPopup] = useState(false);


    const handleAdd = (newEntry) => {
        setData((prevData) => [...prevData, newEntry]);

    };
    return (
        <div>
            <div className="second-cont bg-customsec_bg h-16 p-2 mt-3 rounded-lg shadow-lg flex justify-between">
                <div>
                    <h1 className="text-customGreen text-4xl">{props.header}</h1>
                </div>
                <div className="flex gap-3">
                    <Button onClick={() => {
                        setShowPopup(true);
                    }}
                        style={"bg-customGreen text-white mt-2 px-5 h-8 w-20 rounded-2xl hover:bg-gray-600"}>Add</Button>

                    <ActionBtn />
                    {showPopup && (
                        <Popup
                            onClose={() => setShowPopup(false)}
                            onAdd={handleAdd}

                        />
                    )}

                </div>
            </div>
            <Table data={data} />
            <div>

            </div>
        </div>
    );
}