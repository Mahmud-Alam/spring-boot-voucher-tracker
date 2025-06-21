import axios from "axios";

const BASE_URL = "http://localhost:8081/api";

export const getAllVouchers = () => axios.get(`${BASE_URL}/vouchers`);

export const getVouchersByEmpId = (empId) =>
  axios.get(`${BASE_URL}/vouchers/${empId}`);

export const updateVoucher = (id, payload) =>
  axios.put(`${BASE_URL}/vouchers/${id}`, payload);
