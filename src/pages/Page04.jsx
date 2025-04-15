import { NavLink } from "react-router-dom";

function Page04() {
  const nameOnCard = localStorage.getItem("nameOnCard") || "samplea";
  const cardTitle = localStorage.getItem("cardTitle") || "sample";
  const validityStart = localStorage.getItem("validityStart") || "";
  const validityEnd = localStorage.getItem("validityEnd") || "";

  const frameworkNumber = "14472008112";
  const orderNumber = "1221";
  const costCentre = "32324";
  const employeeId = "123";
  const merchantName = "test";
  const transactionCurrency = "CNY";
  const cardLimit = "500";

  return (
    <div className="min-h-screen bg-gray-50 p-6">
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

      {/* Progress Bar */}
      {/* <div className="flex items-center justify-between px-8 mb-6">
        <div className="flex-1 h-0.5 bg-indigo-500 relative">
          <div className="absolute -top-2 left-0 w-4 h-4 bg-white border-2 border-indigo-500 rounded-full"></div>
        </div>
        <div className="flex-1 h-0.5 bg-indigo-500 relative">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-indigo-500 rounded-full"></div>
        </div>
        <div className="flex-1 h-0.5 bg-gray-300 relative">
          <div className="absolute -top-2 right-0 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Details */}
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow space-y-8">
          {/* Section: Details */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-gray-800 font-bold text-lg">Details</h2>
              <button className="text-indigo-600 text-sm hover:underline">
                ✏️
              </button>
            </div>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <p className="text-indigo-600">Name on Card</p>
              <p className="text-gray-800">{nameOnCard}</p>
              <p className="text-indigo-600">Card Title</p>
              <p className="text-gray-800">{cardTitle}</p>
            </div>
          </div>

          {/* Section: Billing Information */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-gray-800 font-bold text-lg">
                Billing Information
              </h2>
              <button className="text-indigo-600 text-sm hover:underline">
                ✏️
              </button>
            </div>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <p className="text-indigo-600">Framework Number</p>
              <p className="text-gray-800">{frameworkNumber}</p>
              <p className="text-indigo-600">Order Number</p>
              <p className="text-gray-800">{orderNumber}</p>
              <p className="text-indigo-600">Cost Centre</p>
              <p className="text-gray-800">{costCentre}</p>
              <p className="text-indigo-600">IT Logiknummer</p>
              <p className="text-gray-800">file</p>
              <p className="text-indigo-600">Employee ID</p>
              <p className="text-gray-800">{employeeId}</p>
            </div>
          </div>

          {/* Section: Settings */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-gray-800 font-bold text-lg">Settings</h2>
              <button className="text-indigo-600 text-sm hover:underline">
                ✏️
              </button>
            </div>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <p className="text-indigo-600">Merchant Name</p>
              <p className="text-gray-800">{merchantName}</p>
              <p className="text-indigo-600">Validity Period</p>
              <p className="text-gray-800">
                {validityStart && validityEnd
                  ? `${validityStart} - ${validityEnd}`
                  : "13/11/2024 - 14/11/2024"}
              </p>
              <p className="text-indigo-600">
                Transaction Currency Restrictions
              </p>
              <p className="text-gray-800">{transactionCurrency}</p>
              <p className="text-indigo-600">Card Limit</p>
              <p className="text-gray-800">{cardLimit}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
        
        </div>

        {/* Right Card Preview */}
        <div className="w-72 h-96 bg-gradient-to-br from-gray-100 to-white text-gray-900 rounded-lg shadow-lg p-4 relative">
          {/* Card number and CVC */}
          <div className="absolute top-4 right-4 text-sm text-gray-700 font-medium text-right leading-tight">
            5216
            <br />
            **** ****
            <br />
            1234
            <br />
            <span className="text-[10px]">CVV</span>
          </div>

          {/* Card Content */}
          <div className="flex flex-col h-full justify-between">
            <div className="mt-16 text-9xl -ml-4 font-bold text-indigo-900">A+</div>

            {/* Name and title */}
            <div className="flex justify-between items-end">
              <div className="text-sm text-gray-700 font-medium">
                <p>{cardTitle || "sample"}</p>
                <p>{nameOnCard || "samplea"}</p>
              </div>

              {/* Branding */}
              <div className="flex items-center space-x-2">
                <span className="text-indigo-900  font-bold text-lg">
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
      <div className="flex w-[60%]  justify-between mt-6">
            <NavLink to="/page03">
              <button className="px-6 py-2 border border-indigo-800 rounded text-indigo-800 hover:bg-gray-100">
                Back
              </button>
            </NavLink>
            <NavLink to="/page05">
              <button className="px-6 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-800">
                Confirm
              </button>
            </NavLink>
          </div>
    </div>
  );
}

export default Page04;
