package com.example.bookapp.repository;

import com.example.bookapp.model.Book;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class BookRepositoryTest {

    @Autowired
    private BookRepository bookRepository;

    @Test
    void testSaveBook() {
        Book book = new Book(null, "Clean Code", "Robert C. Martin");
        Book saved = bookRepository.save(book);

        assertThat(saved.getId()).isNotNull();
        assertThat(saved.getTitle()).isEqualTo("Clean Code");
    }

    @Test
    void testFindById() {
        Book saved = bookRepository.save(new Book(null, "DDD", "Eric Evans"));

        Optional<Book> found = bookRepository.findById(saved.getId());

        assertThat(found).isPresent();
        assertThat(found.get().getAuthor()).isEqualTo("Eric Evans");
    }

    @Test
    void testFindAll() {
        bookRepository.save(new Book(null, "Book A", "Author A"));
        bookRepository.save(new Book(null, "Book B", "Author B"));

        List<Book> books = bookRepository.findAll();

        assertThat(books).hasSize(2);
    }

    @Test
    void testDelete() {
        Book saved = bookRepository.save(new Book(null, "Temp", "Someone"));

        bookRepository.delete(saved);

        assertThat(bookRepository.findById(saved.getId())).isNotPresent();
    }

    @Test
    void testUpdateBook() {
        Book saved = bookRepository.save(new Book(null, "Old Title", "Author"));

        saved.setTitle("New Title");
        Book updated = bookRepository.save(saved);

        assertThat(updated.getTitle()).isEqualTo("New Title");
    }
}