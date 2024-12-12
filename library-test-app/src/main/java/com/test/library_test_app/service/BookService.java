package com.test.library_test_app.service;

import com.test.library_test_app.books.entity.Book;
import com.test.library_test_app.books.repository.BookRepository;
import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class BookService {
    private PriorityQueue<Book> topRatedPublications;
    private final BookRepository bookRepository;
    private final int NUMBER_OF_TOP_RATED_BOOKS = 10;

    @PostConstruct
    public void init() {
        topRatedPublications = new PriorityQueue<>(Comparator.comparing(Book::getRating).reversed());
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
            throw new EntityNotFoundException("No Book with the id " + '"' + id + '"' + " is in our database, Dumb Ass");
        }
        bookRepository.deleteById(id);
    }

    public Book getBookById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public Book updateBook(Long id, Book book) {
        Optional<Book> optionalBook = bookRepository.findById(id);

        // Only update if the book exists in the database
        if (optionalBook.isPresent()) {
            Book existingBook = optionalBook.get();

            existingBook.setAuthor(book.getAuthor());
            existingBook.setTitle(book.getTitle());
            existingBook.setGenre(book.getGenre());
            existingBook.setAvailable(book.isAvailable());

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
        LinkedList<Book> sortedBooks = new LinkedList<>(topRatedPublications);
        sortedBooks.sort(Comparator.comparing(Book::getRating).reversed());

        return sortedBooks;
    }
}
