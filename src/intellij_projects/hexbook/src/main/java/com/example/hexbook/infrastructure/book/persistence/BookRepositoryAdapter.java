package com.example.hexbook.infrastructure.book.persistence;

import com.example.hexbook.domain.book.Book;
import com.example.hexbook.domain.book.BookRepositoryPort;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class BookRepositoryAdapter  implements BookRepositoryPort {
    private final SpringDataBookRepository springDataBookRepository;

    public BookRepositoryAdapter(SpringDataBookRepository springDataBookRepository) {
        this.springDataBookRepository = springDataBookRepository;
    }

    @Override
    public Book save(Book book) {
        BookEntity entity = new BookEntity(book.getId(), book.getTitle(), book.getAuthor());
        BookEntity saved = springDataBookRepository.save(entity);
        return new Book(saved.getId(), saved.getTitle(), saved.getAuthor());
    }

    @Override
    public Optional<Book> findById(Long id) {
        return springDataBookRepository.findById(id)
                .map(e -> new Book(e.getId(), e.getTitle(), e.getAuthor()));
    }

    @Override
    public List<Book> findAll() {
        return springDataBookRepository.findAll().stream()
                .map(e -> new Book(e.getId(), e.getTitle(), e.getAuthor()))
                .toList();
    }
    @Override
    public void deleteById(Long id) {
        springDataBookRepository.deleteById(id);
    }
}
