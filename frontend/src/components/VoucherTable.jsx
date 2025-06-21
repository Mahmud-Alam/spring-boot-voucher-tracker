import { useEffect, useState } from "react";
import {
  getAllVouchers,
  updateVoucher,
} from "../api/voucherApi";
import EditVoucherModal from "./EditVoucherModal";
import { toast } from "react-toastify";

const VoucherTable = () => {
  const [vouchers, setVouchers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedVoucher, setSelectedVoucher] = useState(null);

  const loadData = async () => {
    const res = await getAllVouchers();
    setVouchers(res.data.data);

    // derive unique employee list from vouchers
    const uniqueEmps = [];
    res.data.data.forEach(v => {
      if (!uniqueEmps.find(e => e.empId === v.employee.empId)) {
        uniqueEmps.push(v.employee);
      }
    });
    setEmployees(uniqueEmps);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEdit = (voucher) => {
    setSelectedVoucher(voucher);
  };

  const handleUpdate = async (id, payload) => {
    await updateVoucher(id, payload);
    toast.success("Voucher updated successfully!");
    setSelectedVoucher(null);
    loadData();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Employee Vouchers</h2>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Voucher ID</th>
            <th className="p-2 border">Employee Name</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {vouchers.map((v) => (
            <tr key={v.id}>
              <td className="border p-2">{v.voucherId}</td>
              <td className="border p-2">{v.employee.empName}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(v)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedVoucher && (
        <EditVoucherModal
          voucher={selectedVoucher}
          employees={employees}
          onClose={() => setSelectedVoucher(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default VoucherTable;
