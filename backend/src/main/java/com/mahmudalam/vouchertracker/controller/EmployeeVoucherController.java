package com.mahmudalam.vouchertracker.controller;

import com.mahmudalam.vouchertracker.dto.UserResponse;
import com.mahmudalam.vouchertracker.dto.VoucherUpdateRequest;
import com.mahmudalam.vouchertracker.model.EmployeeVoucher;
import com.mahmudalam.vouchertracker.service.EmployeeVoucherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vouchers")
@CrossOrigin(origins = "http://localhost:5173/") // Vite dev server port
public class EmployeeVoucherController {

    @Autowired
    private EmployeeVoucherService service;

    @GetMapping
    public ResponseEntity<UserResponse<List<EmployeeVoucher>>> getAllVouchers() {
        UserResponse<List<EmployeeVoucher>> response = service.getAll();
        return response.isSuccess()
                ? ResponseEntity.ok(response)
                : ResponseEntity.status(HttpStatus.NO_CONTENT).body(response);
    }

    @GetMapping("/{empId}")
    public ResponseEntity<UserResponse<List<EmployeeVoucher>>> getVouchersByEmpId(@PathVariable String empId) {
        UserResponse<List<EmployeeVoucher>> response = service.getByEmpId(empId);
        return response.isSuccess()
                ? ResponseEntity.ok(response)
                : ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponse<EmployeeVoucher>> updateVoucher(
            @PathVariable Long id,
            @RequestBody VoucherUpdateRequest request
    ) {
        UserResponse<EmployeeVoucher> response = service.update(id, request.getEmpId(), request.getVoucherId());
        return response.isSuccess()
                ? ResponseEntity.ok(response)
                : ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }
}