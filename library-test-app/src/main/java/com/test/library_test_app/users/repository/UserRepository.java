package com.test.library_test_app.users.repository;

import com.test.library_test_app.users.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserName(String userName); // Query for authentication
}
