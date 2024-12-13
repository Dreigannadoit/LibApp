package com.test.library_test_app.books.repository;

import com.test.library_test_app.books.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    long countByBookStatus(boolean bookStatus);
}
