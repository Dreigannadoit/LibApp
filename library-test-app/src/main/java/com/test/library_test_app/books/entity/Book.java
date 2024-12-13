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
    private Long bookNumber;

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

    // Only store the latest date in the database
    @Column(name = "last_date_updated")
    @Temporal(TemporalType.TIMESTAMP)
    private Date lastDateUpdated;

    // This stack will not be persisted in the database
    @Transient
    private Stack<Date> updateHistory = new Stack<>();
}

