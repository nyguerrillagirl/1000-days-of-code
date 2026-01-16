package com.example.hexbook;

import com.example.hexbook.application.book.BookService;
import com.example.hexbook.domain.book.BookRepositoryPort;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class HexbookApplication {

    public static void main(String[] args) {
        SpringApplication.run(HexbookApplication.class, args);
    }

    @Bean
    public BookService bookService(BookRepositoryPort bookRepositoryPort) {
        return new BookService(bookRepositoryPort);
    }
}
