package com.example.hexbook.application.book;

import com.example.hexbook.domain.book.Book;
import com.example.hexbook.domain.book.BookRepositoryPort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookRepositoryPort bookRepository;

    public BookService(BookRepositoryPort bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book createBook(String title, String author) {
        Book book = new Book(null, title, author);
        return bookRepository.save(book);
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBook(Long id) {
        return bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found: " + id));
    }

    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
}
