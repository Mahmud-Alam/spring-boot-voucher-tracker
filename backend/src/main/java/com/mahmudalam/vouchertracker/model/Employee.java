package com.mahmudalam.vouchertracker.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "employees")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Employee {
    @Id
    private String empId;
    private String empName;
}
