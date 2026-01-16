package com.example.hexbook.infrastructure.book.persistence;

import static org.junit.jupiter.api.Assertions.*;

import com.example.hexbook.domain.book.Book;
import com.example.hexbook.domain.book.BookRepositoryPort;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;


import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class BookRepositoryAdapterTest {

    @Autowired
    private SpringDataBookRepository springDataBookRepository;

    @Test
    void save_persistsDomainBook() {
        BookRepositoryAdapter adapter = new BookRepositoryAdapter(springDataBookRepository);

        Book book = new Book(null, "Clean Code", "Robert Martin");

        Book saved = adapter.save(book);

        assertThat(saved.getId()).isNotNull();
        assertThat(saved.getTitle()).isEqualTo("Clean Code");
    }

    @Test
    void findById_returnsDomainBook() {
        BookRepositoryAdapter adapter = new BookRepositoryAdapter(springDataBookRepository);

        Book saved = adapter.save(new Book(null, "DDD", "Eric Evans"));

        Optional<Book> found = adapter.findById(saved.getId());

        assertThat(found).isPresent();
        assertThat(found.get().getAuthor()).isEqualTo("Eric Evans");
    }

    @Test
    void findAll_returnsAllDomainBooks() {
        BookRepositoryAdapter adapter = new BookRepositoryAdapter(springDataBookRepository);

        adapter.save(new Book(null, "A", "Author A"));
        adapter.save(new Book(null, "B", "Author B"));

        List<Book> books = adapter.findAll();

        assertThat(books).hasSize(2);
    }
}