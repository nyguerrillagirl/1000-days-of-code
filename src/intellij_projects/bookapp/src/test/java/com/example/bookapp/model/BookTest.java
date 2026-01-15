package com.example.bookapp.model;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

class BookTest {

    @Test
    void testNoArgsConstructorAndSetters() {
        Book book = new Book();
        book.setId(1L);
        book.setTitle("Clean Code");
        book.setAuthor("Robert C. Martin");

        assertThat(book.getId()).isEqualTo(1L);
        assertThat(book.getTitle()).isEqualTo("Clean Code");
        assertThat(book.getAuthor()).isEqualTo("Robert C. Martin");
    }

    @Test
    void testAllArgsConstructor() {
        Book book = new Book(1L, "Clean Architecture", "Robert C. Martin");

        assertThat(book.getId()).isEqualTo(1L);
        assertThat(book.getTitle()).isEqualTo("Clean Architecture");
        assertThat(book.getAuthor()).isEqualTo("Robert C. Martin");
    }

    @Test
    void testEqualsAndHashCode() {
        Book b1 = new Book(1L, "Test", "Author");
        Book b2 = new Book(1L, "Test", "Author");

        assertThat(b1).isEqualTo(b2);
        assertThat(b1.hashCode()).isEqualTo(b2.hashCode());
    }

    @Test
    void testToString() {
        Book book = new Book(1L, "Domain-Driven Design", "Eric Evans");

        String result = book.toString();

        assertThat(result)
                .contains("Domain-Driven Design")
                .contains("Eric Evans")
                .contains("1");
    }

    @Test
    void testMutability() {
        Book book = new Book();
        book.setTitle("Old Title");

        book.setTitle("New Title");

        assertThat(book.getTitle()).isEqualTo("New Title");
    }

}