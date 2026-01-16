package com.example.hexbook.infrastructure.book.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SpringDataBookRepository extends JpaRepository<BookEntity, Long> {
}
