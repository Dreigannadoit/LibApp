package com.test.library_test_app.books.entity;

import com.test.library_test_app.users.entity.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.Stack;

@Entity
@Data
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String author;

    private String genre;

    private boolean isAvailable;

    private int rating;

    private Stack<Date> lastDateBorrowed;

    private Stack<User> lastPersonBorrowed;

    private Stack<User> userFootPrint; // who has borrowed the book
}
