package com.test.library_test_app.controller;

import com.test.library_test_app.books.entity.Book;
import com.test.library_test_app.service.BookService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@RequestMapping("/bookApi")
@RequiredArgsConstructor
@CrossOrigin("*")
public class BookController {

    private final BookService bookService;

    @PostMapping("/book")
    public Book postBook(@RequestBody Book book){
        return bookService.postBook(book);
    }

    @GetMapping("books")
    public LinkedList<Book> getAllBooks(){
        return bookService.getAllBooks();
    }

    @DeleteMapping("/book/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long id){
        try {
            bookService.deleteBook(id);
            return new ResponseEntity<>(" Book with ID " + '"' + id + '"' + " was deleted successfully", HttpStatus.OK);
        } catch (EntityNotFoundException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/book/{id}")
    public ResponseEntity<?> getBookById(@PathVariable Long id){
        Book book = bookService.getBookById(id);
        if(book == null ) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(book);
    }

    @PatchMapping("/book/{id}")
    public ResponseEntity<?> updateBook(@PathVariable Long id, @RequestBody Book book){
        Book updateBook = bookService.updateBook(id, book);
        System.out.println("User has Updating Book");

        if( updateBook == null ) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

        return ResponseEntity.ok(updateBook);
    }
}
