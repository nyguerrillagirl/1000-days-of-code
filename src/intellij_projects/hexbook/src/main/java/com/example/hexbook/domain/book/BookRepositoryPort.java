package com.example.hexbook.domain.book;

import java.util.List;
import java.util.Optional;

public interface BookRepositoryPort {

    Book save(Book book);

    Optional<Book> findById(Long id);

    List<Book> findAll();

    void deleteById(Long id);

}
