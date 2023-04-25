package com.example.springboot;

import java.util.List;

public interface BookService {
	
	List<Book> getAllBooks();
	
	Book getBookById(int id);
	
	Book saveBook(Book book);
	
	void deleteBook(Book book);
	
	boolean checkExisted(Book book);
}
