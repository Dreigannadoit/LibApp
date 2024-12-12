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
    private String bookTitle; // Renamed to camelCase

    @Column(name = "book_author")
    private String bookAuthor; // Renamed to camelCase

    @Column(name = "book_genre")
    private String bookGenre; // Renamed to camelCase

    @Column(name = "book_status")
    private boolean bookStatus; // Renamed to camelCase

    private int rating; // No change

   
}
