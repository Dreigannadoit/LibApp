package com.test.library_test_app.service;

import com.test.library_test_app.entity.Book;
import com.test.library_test_app.repository.BookRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

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
}
