import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VoucherTable from "./components/VoucherTable";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [menu, setMenu] = useState("vouchers");

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar on top */}
      <Navbar />

      {/* Sidebar and Main content below navbar */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onSelect={setMenu} />
        <div className="flex-1 overflow-y-auto p-4">
          {menu === "vouchers" && <VoucherTable />}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
