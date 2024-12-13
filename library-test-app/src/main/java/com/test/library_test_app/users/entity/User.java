package com.test.library_test_app.users.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.test.library_test_app.books.entity.Book;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Stack;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "users") // Ensure this matches your database table name
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty("user_name") // Map JSON field to Java field
    @Column(name = "user_name", unique = true, nullable = false)
    private String userName;

    @JsonProperty("user_password") // Map JSON field to Java field
    @Column(name = "user_password", nullable = false)
    private String userPassword;


//    @Column(name = "status", nullable = false) // Map to "status" column
//    private String userStatus;
//
//    @Transient // This field is not persisted in the database
//    private Stack<Book> userBorrowedHistory;
}
