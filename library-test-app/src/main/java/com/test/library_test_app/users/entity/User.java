package com.test.library_test_app.users.entity;

import com.test.library_test_app.books.entity.Book;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.Stack;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id") // Map to the "user_id" column in the database
    private Long id;

    @Column(name = "username", nullable = false, unique = true) // Map to the "username" column
    private String userName;

    @Column(name = "password", nullable = false) // Map to the "password" column
    private String userPassword;
    

}
