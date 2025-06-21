package com.mahmudalam.vouchertracker.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "employeevouchers")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeeVoucher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String voucherId;

    @ManyToOne
    @JoinColumn(name = "emp_id", referencedColumnName = "empId")
    private Employee employee;
}
