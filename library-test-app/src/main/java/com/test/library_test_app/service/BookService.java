package com.test.library_test_app.service;

import com.test.library_test_app.books.entity.Book;
import com.test.library_test_app.books.repository.BookRepository;
import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.text.SimpleDateFormat;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.util.*;


@Service
@RequiredArgsConstructor
public class BookService {
    private PriorityQueue<Book> topRatedPublications;
    private final BookRepository bookRepository;
    private final int NUMBER_OF_TOP_RATED_BOOKS = 3;

    @PostConstruct
    public void init() {
        topRatedPublications = new PriorityQueue<>(Comparator.comparing(Book::getRating).reversed());
    }

    public long getAvailableBooksCount() {
        return bookRepository.countByBookStatus(true);
    }

    public Book postBook(Book book) {
        return bookRepository.save(book);
    }

    public LinkedList<Book> getAllBooks() {
        // Convert the result of findAll to a LinkedList
        List<Book> books = bookRepository.findAll();
        return new LinkedList<>(books);
    }

    public void deleteBook(Long id) {
        if (!bookRepository.existsById(id)) {
            throw new EntityNotFoundException("No Book with the id " + '"' + id + '"' + " is in our database");
        }
        bookRepository.deleteById(id);
    }

    public Book getBookById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public Book updateBook(Long id, Book book) {
        Optional<Book> optionalBook = bookRepository.findById(id);

        if (optionalBook.isPresent()) {
            Book existingBook = optionalBook.get();

            // Update the book fields
            existingBook.setTitle(book.getTitle());
            existingBook.setAuthor(book.getAuthor());
            existingBook.setGenre(book.getGenre());
            existingBook.setDescription(book.getDescription());
            existingBook.setRating(book.getRating());
            existingBook.setBookStatus(book.isBookStatus());

            // Add the current date to the update history (in memory)
            Date currentDate = new Date();
            if (existingBook.getUpdateHistory() == null) {
                existingBook.setUpdateHistory(new Stack<>());
            }
            existingBook.getUpdateHistory().add(currentDate);

            // Set the latest update date for the database
            existingBook.setLastDateUpdated(currentDate);

            return bookRepository.save(existingBook);
        }

        return null;
    }


    public void addTopRatedBook(Book book) {
        if (topRatedPublications.size() < NUMBER_OF_TOP_RATED_BOOKS) {
            topRatedPublications.add(book);
        } else if (book.getRating() > topRatedPublications.peek().getRating()) {
            topRatedPublications.poll();
            topRatedPublications.add(book);
        }
    }

    public LinkedList<Book> getTopRatedBook(){
        LinkedList<Book> sortedBooks = new LinkedList<>(bookRepository.findAll());
        sortedBooks.sort(Comparator.comparing(Book::getRating).reversed());

        return sortedBooks;
    }
}