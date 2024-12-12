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
    @Column(name = "book_number")
    private Long bookNumber; // Renamed to camelCase to follow Java convention

    @Column(name = "book_title")
    private String title;

    @Column(name = "book_author")
    private String author;

    @Column(name = "book_genre")
    private String genre;

    @Column(name = "book_description")
    private String description;

    @Column(name = "book_status")
    private boolean bookStatus;

    private int rating;

    private Stack<Date> lastDateBorrowed;

    private Stack<User> userFootPrint; // who has borrowed the book
}
