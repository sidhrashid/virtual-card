import { NavLink } from "react-router-dom";

function ConfirmCard() {
    const nameOnCard = localStorage.getItem("nameOnCard") || "samplea";
    const cardTitle = localStorage.getItem("cardTitle") || "sample";
    const cardNumber = "5216 **** **** 1234";
    const cvv = "CVV";
  
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        
        {/* Card Preview */}
        <div className="w-72 h-96 bg-gradient-to-br from-gray-100 to-white text-gray-900 border border-indigo-900 rounded-lg shadow-md p-4 relative">
          
          {/* Top Right Numbers */}
          <div className="absolute top-4 right-4 text-xs text-gray-700 text-right">
            {cardNumber}
            <br />
            {cvv}
          </div>
  
          {/* Card Title & Name */}
          <div className="text-left text-xs text-gray-800">
            <p className="font-semibold">{cardTitle || "Card Title"}</p>
            <p>{nameOnCard || "Name on Card"}</p>
          </div>
  
          {/* Big A+ logo */}
          <div className="text-9xl absolute -left-2 font-extrabold text-indigo-900 mt-20 pl-2">
            A+
          </div>
  
          {/* Card Footer */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="text-xs text-gray-700">
              <p>12-04-2025 - 02-05-2025</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-indigo-900">AirPlus</span>
                <img
                    src="https://img.icons8.com/color/48/mastercard-logo.png"
                    alt="Mastercard"
                    className="w-15"
                />
            </div>
          </div>
        </div>
  
        {/* Success message */}
        <p className="mt-6 text-center text-indigo-900 font-medium">
          Your Airplus virtual card has been successfully created.
        </p>
  
        {/* Buttons */}
        <div className="mt-4 flex space-x-4">
        <NavLink to="/">
        <button className="border border-indigo-800 text-indigo-800 px-4 py-2 rounded-lg hover:bg-indigo-100">
            Create new Virtual Card
          </button>
        </NavLink>
          <button className="bg-indigo-800 text-white px-4 py-2 rounded-lg">
            Speak to sales
          </button>
        </div>
      </div>
    );
  }
  
  export default ConfirmCard;
  