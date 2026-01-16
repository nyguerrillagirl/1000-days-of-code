package com.example.hexbook.domain.book;

import lombok.Data;

@Data
public class Book {

    private final Long id;
    private final String title;
    private final String author;

    public Book(Long id, String title, String author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}
