import { useState } from "react";
import { NavLink } from "react-router-dom";

function Page02() {
  const [cardData, setCardData] = useState({
    cardTitle: "",
    nameOnCard: "",
    costCenter: "101012690",
    employeeId: "A74231",
    orderNumber: "145785",
    departmentCode: "JT-V32",
  });

  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
    localStorage.setItem(name, value);
  };

  const handleFocus = (name) => setFocusedInput(name);
  const handleBlur = () => setFocusedInput(null);

  return (
    <div className="min-h-screen bg-white p-6 ">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-4  rounded-lg shadow mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-indigo-800">AirPlus</h1>
        </div>
        <div className="text-start">
          <p className="text-gray-600 text-md font-bold">Your Name</p>
          <p className="text-gray-600  w-full">Your Role</p>
        </div>
      </div>

     

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Form */}
        <div className="md:w-1/2 rounded-lg shadow bg-white p-6 space-y-6">
          <p className="text-sm text-gray-600 mb-2 font-medium">
            Please enter the card information:
          </p>
          <input
            type="text"
            name="cardTitle"
            value={cardData.cardTitle}
            onChange={handleChange}
            onFocus={() => handleFocus("cardTitle")}
            onBlur={handleBlur}
            placeholder="Card Title"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="text"
            name="nameOnCard"
            value={cardData.nameOnCard}
            onChange={handleChange}
            onFocus={() => handleFocus("nameOnCard")}
            onBlur={handleBlur}
            placeholder="Name on Card"
            className="w-full p-2 border border-gray-300 rounded mb-6"
          />

          <p className="text-sm text-gray-600 mb-2 font-medium">
            Please enter your billing information:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="costCenter"
                value={cardData.costCenter}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
              <p className="text-red-500 text-xs mt-1">*</p>
            </div>
            <div>
              <input
                type="text"
                name="employeeId"
                value={cardData.employeeId}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
              <p className="text-red-500 text-xs mt-1">*</p>
            </div>
            <div>
              <input
                type="text"
                name="orderNumber"
                value={cardData.orderNumber}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
              <p className="text-red-500 text-xs mt-1">*</p>
            </div>
            <div>
              <input
                type="text"
                name="departmentCode"
                value={cardData.departmentCode}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
              <p className="text-red-500 text-xs mt-1">*</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">* Mandatory field</p>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <NavLink to="/page01">
              <button className="border border-gray-300 text-gray-700 px-5 py-2 rounded font-medium">
                Back
              </button>
            </NavLink>
            <NavLink to="/page03">
              <button className="bg-indigo-900 text-white px-6 py-2 rounded font-semibold">
                Next
              </button>
            </NavLink>
          </div>
        </div>

        {/* Right Card Preview */}
        <div className="md:w-1/2 flex justify-center items-start  ">
          <div className="w-64 h-96 bg-gradient-to-br from-gray-100 to-white text-gray-900 border border-indigo-900 rounded-lg shadow-md p-4 relative">
            {/* Top Right Numbers */}
            <div className="absolute top-4 right-4 text-xs text-gray-700 text-right">
              5216 **** <br /> **** 1234 <br /> CVV
            </div>
            <div>
                <div className="text-left text-sm text-gray-700 font-medium">
                <p className="font-semibold">
                  {focusedInput === "cardTitle" && !cardData.cardTitle
                    ? "Card Title"
                    : cardData.cardTitle || "Card Title"}
                </p>
                <p>
                  {focusedInput === "nameOnCard" && !cardData.nameOnCard
                    ? "Name on Card"
                    : cardData.nameOnCard || "Name on Card"}
                </p>
              </div>
            </div>

            {/* Big A+ logo */}
            <div className="text-9xl absolute -left-2 font-extrabold text-indigo-900 mt-20 pl-2">A+</div>

            {/* Card Info */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-indigo-900">AirPlus</span>
                <img
                  src="https://img.icons8.com/color/48/mastercard-logo.png"
                  alt="Mastercard"
                  className="w-15 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page02;
