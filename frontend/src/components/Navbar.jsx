import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">ATI Voucher Tracker</h1>
      <button className="bg-blue-800 px-4 py-1 rounded">Home</button>
    </div>
  );
};

export default Navbar;
