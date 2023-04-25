package com.example.springboot;

import java.util.List;

import org.aspectj.weaver.NewConstructorTypeMunger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.embedded.netty.NettyReactiveWebServerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.HttpStatus;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/books")
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	@GetMapping
	public List<Book> getAllBooks() {
		return bookService.getAllBooks();
	}
	
	// build create REST API
	@PostMapping
	public ResponseEntity<?> createBook(@RequestBody Book book) {
		if(bookService.checkExisted(book) == false){
			Error error = new Error();
			error.setMessage("  This Book is alrealdy existed!");
			return new ResponseEntity<>(error, HttpStatus.OK);
		}
		
		return new ResponseEntity<>(bookService.saveBook(book), HttpStatus.CREATED);
	}
	
	// build get a book by id REST API
	@GetMapping("{id}")
	public ResponseEntity<?> getBookById(@PathVariable int id){
		Book book = bookService.getBookById(id);
		return ResponseEntity.ok(book);
	}
	
	// build update REST api
	@PutMapping("{id}")
	public ResponseEntity<?> updateBook(@PathVariable int id, @RequestBody Book bookdetail){
		Book updateBook = bookService.getBookById(id);
		
		updateBook.setTitle(bookdetail.getTitle());
		updateBook.setAuthor(bookdetail.getAuthor());
		updateBook.setCategory(bookdetail.getCategory());
		updateBook.setApproved(bookdetail.isApproved());
		
		if(bookService.checkExisted(updateBook) == false){
			Error error = new Error();
			error.setMessage("Book existed!");
			return new ResponseEntity<>(error, HttpStatus.OK);
		}
		
		return new ResponseEntity<>(bookService.saveBook(updateBook), HttpStatus.OK);
	}
	
	// build delete REST api
	@DeleteMapping("{id}")
	public ResponseEntity<?> deleteBook(@PathVariable int id){
		
		Book book = bookService.getBookById(id);
		bookService.deleteBook(book);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
