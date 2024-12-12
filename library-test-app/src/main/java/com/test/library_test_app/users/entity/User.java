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
    private Long id;

    private String userName;

    private String userPassword;

    private LocalDateTime userJoined;

    private String userStatus; // Borrowing, Overdue

    private Stack<Book> userBorrowedHistory;
}
