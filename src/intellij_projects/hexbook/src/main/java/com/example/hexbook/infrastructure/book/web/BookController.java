package com.example.hexbook.infrastructure.book.web;

import com.example.hexbook.adapter.in.web.CreateBookRequest;
import com.example.hexbook.application.book.BookService;

import com.example.hexbook.domain.book.Book;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Book create(@RequestBody CreateBookRequest request) {
        return bookService.createBook(request.getTitle(), request.getAuthor());
    }

    @GetMapping
    public List<Book> all() {
        return bookService.getAllBooks();
    }

    @GetMapping("/{id}")
    public Book one(@PathVariable long id) {
        return bookService.getBook(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        bookService.deleteBook(id);
    }

}
