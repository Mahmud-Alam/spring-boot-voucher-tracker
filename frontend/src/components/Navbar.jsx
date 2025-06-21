import logo from "/logo.png"; 

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {/* <img src={logo} alt="ATI Logo" className="h-8 rounded" /> */}
        <h1 className="text-xl font-bold">ATI Voucher Tracker</h1>
      </div>
      <button className="bg-blue-800 px-4 py-1 rounded">Logout</button>
    </div>
  );
};

export default Navbar;
