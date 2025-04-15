import { useState } from "react";
import { NavLink } from "react-router-dom";

function Page03() {
  const nameOnCard = localStorage.getItem("nameOnCard") || "samplea";
  const cardTitle = localStorage.getItem("cardTitle") || "sample";
  const [cardData, setCardData] = useState({
    validityStart: "",
    validityEnd: "",
    currency: "EUR",
    amount: "500",
    sample: "sample",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
    localStorage.setItem(name, value);
  };

  return (
    <div className="min-h-screen bg-white px-8 py-6">
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

      {/* Main */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-base font-medium mb-4">Define your settings</h2>

          {/* Validity Period */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Validity period <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                type="date"
                name="validityStart"
                value={cardData.validityStart}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="date"
                name="validityEnd"
                value={cardData.validityEnd}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
              />
            </div>
          </div>

          {/* Currency Dropdown */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Choose Your Currency
            </label>
            <select
              name="currency"
              value={cardData.currency}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
          </div>

          {/* Amount Field */}
          <div className="mb-5">
            <input
              type="text"
              name="amount"
              value={cardData.amount}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
            <p className="text-xs text-red-500 mt-1">* Mandatory field</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <NavLink to="/page02">
              <button className="px-6 py-2 border border-indigo-800 rounded text-indigo-800 hover:bg-gray-100">
                Back
              </button>
            </NavLink>
            <NavLink to="/page04">
              <button className="px-6 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-800">
                Next
              </button>
            </NavLink>
          </div>
        </div>

        {/* Right Card Preview */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-64 h-96 bg-gradient-to-br from-gray-100 to-white text-gray-900 border border-indigo-900 rounded-lg shadow-md p-4 relative">
            {/* Top Right Numbers */}
            <div className="absolute top-4 right-4 text-xs text-gray-700 text-right">
              5216 **** <br /> **** 1234 <br /> CVV
            </div>

            {/* Title & Name */}
            <div className="text-left text-sm text-gray-700 font-medium">
              <p className="font-semibold">{cardTitle || "Card Title"}</p>
              <p>{nameOnCard || "Name on Card"}</p>
            </div>

            {/* Big A+ logo */}
            <div className="text-9xl absolute -left-2 font-extrabold text-indigo-900 mt-20 pl-2">
              A+
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="text-xs text-gray-700">
                <p>
                  {cardData.validityStart && cardData.validityEnd
                    ? `${cardData.validityStart} - ${cardData.validityEnd}`
                    : "12-04-2025 - 02-05-2025"}
                </p>
                <p>{cardData.currency || "€"}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-indigo-900">
                  AirPlus
                </span>
                <img
                  src="https://img.icons8.com/color/48/mastercard-logo.png"
                  alt="Mastercard"
                  className="w-15"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page03;
