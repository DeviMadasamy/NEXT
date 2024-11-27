import React from "react";

export default function Table( {data}) {
 
  if (!Array.isArray(data)) {
    console.log("Invalid data: data should be an array");
    return <div></div>
  }
  
  const sortedData = [...data].sort(
    (a, b) => new Date(b.LastUpdate) - new Date(a.LastUpdate)
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };


  
    return(
     
        <div className="table-container overflow-x-auto bg-white mt-5 rounded-lg h-96">
            
          <table className="min-w-full border-collapse border-b border-gray-200 bg-white text-customGreen">
            <thead className="text-xs text-customGreen whitespace-nowrap">
                
              <tr className="bg-white text-customGreen">
                <th className="px-8 py-2 border-b border-gray-300 text-center font-semibold text-customGreen">
                  Invoice Number
                </th>
                <th className="px-8 py-2 border-b border-gray-300 text-center font-semibold text-customGreen">
                  Post Date
                </th>
                <th className="px-8 py-2 border-b border-gray-300 text-center font-semibold text-customGreen">
                  Generation Type
                </th>
                <th className="px-8 py-2 border-b border-gray-300 text-center font-semibold text-customGreen">
                  Type
                </th>
                <th className="px-8 py-2 border-b border-gray-300 text-center font-semibold text-customGreen">
                  From Company
                </th>
                <th className="px-8 py-2 border-b border-gray-300 text-center font-semibold text-customGreen">
                  To Company
                </th>
                <th className="px-8 py-2 border-b border-gray-300 text-center font-semibold text-customGreen">
                  Net Amount
                </th>
                <th className="px-8 py-2 border-b border-gray-300 text-center font-semibold text-customGreen">
                  VAT Amount
                </th>
                <th className="px-8 py-2 border-b border-gray-300 text-center font-semibold text-customGreen">
                  Amount
                </th>
                <th className="px-8 py-2 border-b border-gray-300 text-center font-semibold text-customGreen">
                  Outstanding Balance
                </th>
                <th className="px-8 py-2 border-b border-gray-300 text-center font-semibold text-customGreen">
                  Status
                </th>
                <th className="px-8 py-2 border-b border-gray-300 text-center font-semibold text-customGreen">
                  Funding Type
                </th>
                <th className="px-8 py-2 border-b border-gray-300 text-center font-semibold text-customGreen">
                  Due Date
                </th>
                <th className="px-8 py-2 border-b border-gray-300 text-center font-semibold text-customGreen">
                  Created
                </th>
                <th className="px-8 py-2 border-b border-gray-300 text-center font-semibold text-customGreen">
                  Last Update
                </th>
              </tr>
            </thead>
           
            <tbody>
            {sortedData.map((item, index) => (
            <tr key={index} className="text-center whitespace-nowrap text-xs">
              <td className="px-8 py-2 border-b">{item.id}</td>
              <td className="px-8 py-2 border-b">{item["Post Date"]}</td>
              <td className="px-8 py-2 border-b">{item["Generation Type"]}</td>
              <td className="px-8 py-2 border-b">{item.type}</td>
              <td className="px-8 py-2 border-b">{item["From Company"]}</td>
              <td className="px-8 py-2 border-b">{item["To Company"]}</td>
              <td className="px-8 py-2 border-b">{item.netAmount}</td>
              <td className="px-8 py-2 border-b">{item.vatAmount}</td>
              <td className="px-8 py-2 border-b">{item.totalAmount}</td>
              <td className="px-8 py-2 border-b">{item.totalAmount}</td>
              <td className="px-8 py-2 border-b">{item.Status}</td>
              <td className="px-8 py-2 border-b">{item["Funding Type"]}</td>
              <td className="px-8 py-2 border-b">
                {item.dueDate ? formatDate(item.dueDate) : "N/A"}
              </td>
              <td className="px-8 py-2 border-b">
                {item.created ? formatDate(item.created) : "N/A"}
              </td>
              <td className="px-8 py-2 border-b">
                {item.LastUpdate ? formatDate(item.LastUpdate) : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
          
          </table>
        </div>
    );
    
}