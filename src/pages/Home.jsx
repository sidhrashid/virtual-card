import { useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [cards] = useState([
    {
      id: 1,
      number: "5216 **** **** 1234",
      name: "Name on Card",
      title: "Card Title",
      expiry: "12/24-11/24",
      limit: "8,000.00€",
      status: "Active",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
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

      <div className="flex flex-row gap-6 p-6">
        {/* Left Sidebar */}
        <div className="w-full h-screen md:w-1/4 p-4 rounded-lg shadow bg-white ">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <svg className="w-full h-full">
              <circle
                cx="50%"
                cy="50%"
                r="40%"
                stroke="#e0e7ff"
                strokeWidth="10"
                fill="transparent"
              />
              <circle
                cx="50%"
                cy="50%"
                r="40%"
                stroke="#3b82f6"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="251.2"
                strokeDashoffset="62.8"
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                className="text-indigo-800 font-bold text-xl"
              >
                75%
              </text>
            </svg>
          </div>
          <p className="text-center text-gray-600">Remaining</p>
          <p className="text-center text-xl font-semibold text-indigo-800">
            8,000.00€
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1  p-7 rounded-lg shadow">
          {/* Top Right Button */}
          <div className="flex justify-end mb-4">
            <NavLink to="/page02">
              <button className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 transition-all flex items-center gap-2">
                Create New
                Card
              </button>
            </NavLink>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row md:items-center md:justify gap-4 mb-6">
            <input
              type="text"
              placeholder="Search for Name or Card Number..."
              className="border rounded px-4 py-2 w-full md:w-[80%]"
            />
            <select className="border rounded px-4 py-2 w-full md:w-[20%]">
              <option>All</option>
            </select>
          </div>

          {/* Heading */}
          <h2 className="text-xl font-semibold text-indigo-800 text-center mb-6">
            Your Existing Active Cards
          </h2>

          {/* Card List */}
          <div className="space-y-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className=" p-6  flex gap-6"
              >
                {/* Card Preview */}
                <div className="bg-gradient-to-br from-gray-100 to-white text-gray-900 border border-indigo-200 p-4 rounded-lg w-52">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm tracking-widest">5216</p>
                    <p className="text-sm">•••• 1234</p>
                  </div>
                  <p className="text-xs text-gray-400">CVC</p>
                  <p className="text-sm font-semibold text-gray-800 mt-4">Card Title</p>
                  <p className="text-sm text-gray-800 mb-4">Name on Card</p>
                  <h1 className="text-4xl font-bold text-indigo-800">A+</h1>
                  <div className="flex justify-between mt-4 items-center">
                    <p className="text-sm font-semibold">AirPlus</p>
                    <img
                  src="https://img.icons8.com/color/48/mastercard-logo.png"
                  alt="Mastercard"
                  className="w-15"
                />
                  </div>
                </div>

                {/* Card Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-gray-600 font-medium">
                      Name on Card
                    </p>
                    <p className="text-base font-semibold text-indigo-800">
                      {card.name}
                    </p>
                    <p className="text-sm mt-2 font-medium text-gray-600">
                      Card Title
                    </p>
                    <p className="text-base text-indigo-800">{card.title}</p>
                    <p className="text-sm mt-4 text-gray-600">
                      <strong>Card Number:</strong> 5033 96xx xxxx 1948
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Created on:</strong> 12 Nov 2024
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Validity:</strong> 11/24 - {card.expiry}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Status:</strong> {card.status}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 font-medium">
                      Card Limit
                    </p>
                    <p className="text-lg font-semibold text-indigo-800">
                      {card.limit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-6">
            <button className="border px-6 py-2 rounded hover:bg-gray-100">
              View All Cards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
