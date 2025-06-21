package com.mahmudalam.vouchertracker.service;

import com.mahmudalam.vouchertracker.dto.UserResponse;
import com.mahmudalam.vouchertracker.model.Employee;
import com.mahmudalam.vouchertracker.model.EmployeeVoucher;
import com.mahmudalam.vouchertracker.repository.EmployeeRepository;
import com.mahmudalam.vouchertracker.repository.EmployeeVoucherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeVoucherService {

    @Autowired
    private EmployeeVoucherRepository voucherRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    public UserResponse<List<EmployeeVoucher>> getAll() {
        try {
            List<EmployeeVoucher> vouchers = voucherRepository.findAll();
            if (vouchers.isEmpty()) {
                return new UserResponse<>(false, null, "No vouchers found.");
            }
            return new UserResponse<>(true, vouchers, null);
        } catch (Exception e) {
            return new UserResponse<>(false, null, "Failed to fetch vouchers: " + e.getMessage());
        }
    }

    public UserResponse<List<EmployeeVoucher>> getByEmpId(String empId) {
        try {
            List<EmployeeVoucher> vouchers = voucherRepository.findByEmployeeEmpId(empId);
            if (vouchers.isEmpty()) {
                return new UserResponse<>(false, null, "No vouchers found for Employee ID: " + empId);
            }
            return new UserResponse<>(true, vouchers, null);
        } catch (Exception e) {
            return new UserResponse<>(false, null, "Failed to fetch vouchers: " + e.getMessage());
        }
    }

    public UserResponse<EmployeeVoucher> update(Long id, String empId, String voucherId) {
        try {
            return voucherRepository.findById(id)
                    .map(existingVoucher -> {
                        Employee employee = employeeRepository.findById(empId)
                                .orElseThrow(() -> new RuntimeException("Employee not found with ID: " + empId));

                        existingVoucher.setEmployee(employee);
                        existingVoucher.setVoucherId(voucherId);

                        EmployeeVoucher saved = voucherRepository.save(existingVoucher);
                        return new UserResponse<>(true, saved, null);
                    })
                    .orElse(new UserResponse<>(false, null, "Voucher not found with ID: " + id));
        } catch (Exception e) {
            return new UserResponse<>(false, null, "Failed to update voucher: " + e.getMessage());
        }
    }
}