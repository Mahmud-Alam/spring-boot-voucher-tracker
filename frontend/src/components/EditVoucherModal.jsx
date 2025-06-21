import { useState } from "react";

const EditVoucherModal = ({ voucher, employees, onClose, onUpdate }) => {
  const [empId, setEmpId] = useState(voucher.employee.empId);
  const [voucherId, setVoucherId] = useState(voucher.voucherId);

  const handleSubmit = () => {
    onUpdate(voucher.id, { empId, voucherId });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96">
        <h3 className="text-xl font-bold mb-4">Edit Voucher</h3>

        <label className="block mb-2">Employee</label>
        <select
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
          className="border w-full mb-4 p-2"
        >
          {employees.map((emp) => (
            <option key={emp.empId} value={emp.empId}>
              {emp.empName}
            </option>
          ))}
        </select>

        <label className="block mb-2">Voucher ID</label>
        <input
          value={voucherId}
          onChange={(e) => setVoucherId(e.target.value)}
          className="border w-full mb-4 p-2"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditVoucherModal;
