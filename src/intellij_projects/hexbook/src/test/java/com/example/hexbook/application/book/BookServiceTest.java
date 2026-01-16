package com.example.hexbook.application.book;

import com.example.hexbook.domain.book.Book;
import com.example.hexbook.domain.book.BookRepositoryPort;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

class BookServiceTest {

    private BookRepositoryPort bookRepositoryPort;
    private BookService bookService;

    @BeforeEach
    void setUp() {
        bookRepositoryPort = mock(BookRepositoryPort.class);
        bookService = new BookService(bookRepositoryPort);
    }

    @Test
    void createBook_savesBookToRepository() {
        Book saved = new Book(1L, "Clean Code", "Robert Martin");

        when(bookRepositoryPort.save(any(Book.class))).thenReturn(saved);

        Book result = bookService.createBook("Clean Code", "Robert Martin");

        assertThat(result.getId()).isEqualTo(1L);
        assertThat(result.getTitle()).isEqualTo("Clean Code");

        verify(bookRepositoryPort).save(any(Book.class));
    }
    @Test
    void createBook_sendsCorrectBookToRepository() {
        ArgumentCaptor<Book> captor = ArgumentCaptor.forClass(Book.class);

        bookService.createBook("Clean Code", "Robert Martin");

        verify(bookRepositoryPort).save(captor.capture());

        Book captured = captor.getValue();

        assertThat(captured.getTitle()).isEqualTo("Clean Code");
        assertThat(captured.getAuthor()).isEqualTo("Robert Martin");
    }

    @Test
    void getBook_returnsBook() {
        Book book = new Book(1L, "DDD", "Eric Evans");

        when(bookRepositoryPort.findById(1L)).thenReturn(Optional.of(book));

        Book found = bookService.getBook(1L);

        assertThat(found).isEqualTo(book);
    }

    @Test
    void getAllBooks_returnsList() {
        when(bookRepositoryPort.findAll()).thenReturn(
                java.util.List.of(
                        new Book(1L, "A", "Author A"),
                        new Book(2L, "B", "Author B")
                )
        );

        var books = bookService.getAllBooks();

        assertThat(books).hasSize(2);
    }
}