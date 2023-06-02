package com.monthlyweekly.expensesproject.JpaRepository;

import com.monthlyweekly.expensesproject.JpaEntity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    User findByPhone(String phone);

    boolean existsByUsername(String username);
}
