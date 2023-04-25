package com.example.springboot;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.util.ObjectUtils;

@Service
public class BookServiceImpl implements BookService{
	
	@Autowired
	private BookRepository bookRepository;

	@Override
	public List<Book> getAllBooks() {
		return bookRepository.findAll();
	}

	@Override
	public Book getBookById(int id) {
		return bookRepository.findById(id).get();
	}

	@Override
	public Book saveBook(Book book) {
		return bookRepository.save(book);
	}

	@Override
	public void deleteBook(Book book) {
		bookRepository.delete(book);
	}
	
	@Override
	public boolean checkExisted(Book book) {
		List<Book> list = bookRepository.getAllBookByTitleAndAuthorIdNot(book.getTitle(), book.getAuthor(), book.getBookcode());
		if(list.size() > 0) {
			return false;
		}
		return true;
	}
}
