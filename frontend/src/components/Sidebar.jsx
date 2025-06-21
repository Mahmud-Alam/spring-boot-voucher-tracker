const Sidebar = ({ onSelect }) => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      <button
        className="block w-full text-left mb-4 px-2 py-2 hover:bg-gray-600 rounded"
        onClick={() => onSelect("vouchers")}
      >
        Employee Voucher Data
      </button>
    </div>
  );
};

export default Sidebar;
