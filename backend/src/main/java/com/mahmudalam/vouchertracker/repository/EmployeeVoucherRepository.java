package com.mahmudalam.vouchertracker.repository;

import com.mahmudalam.vouchertracker.model.EmployeeVoucher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeVoucherRepository extends JpaRepository<EmployeeVoucher, Long> {
    List<EmployeeVoucher> findByEmployeeEmpId(String empId);
}
