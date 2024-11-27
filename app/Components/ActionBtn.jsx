import React from "react";


export default function ActionBtn() {
    return (
        <div>

            <div className="flex gap-3 text-sm">

                {/* PDF Button............................... */}
                <button className="bg-customGreen text-white mt-2 px-5 h-8 w-20 rounded-2xl hover:bg-gray-600">
                    Pdf
                </button>

                <div className="">
                    <select
                        className="bg-customGreen border-none px-4 rounded-2xl  h-8 mt-2 text-white" >
                        <option value="Filter">Filter</option>
                        <option value="Open">Open</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Closed">Closed</option>
                    </select>

                </div>

                {/* Search Input............................ */}
                <input
                    type="text"
                    id="search-input"
                    placeholder="Search..."
                    className="bg-customGreen border-none px-4 rounded-2xl  h-8 mt-2 text-white"
                />
            </div>
        </div>
    );

}