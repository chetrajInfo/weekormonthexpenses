package com.monthlyweekly.expensesproject.JpaRepository;

import com.monthlyweekly.expensesproject.JpaEntity.NewRecord;

import org.springframework.data.jpa.repository.JpaRepository;

public interface NewRecordRepository extends JpaRepository<NewRecord, Long> {
}
