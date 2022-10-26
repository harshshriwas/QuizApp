//package com.management.Quiz.controller;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//
//@Controller
//public class AdminController {
//
//  //create books
//  @RequestMapping(value="/createbooks", method = RequestMethod.POST)
//  public String createBook(@RequestBody BookDetails book) {
//    System.out.println(book.getBookdate());
//      bookService.createBook(book);
//    return "quiz created successfully..!";  
//   }
//
//  /* edit form book details */    
//  @RequestMapping(value="/edit/{id}",method = RequestMethod.GET)    
//  public String editsave(Model model, @PathVariable("id") Integer id){    
//      BookDetails book =bookService.getBookById(id);
//      model.addAttribute("bookdata",book);
//      model.addAttribute("id", id);
//      return "editbook";    
//  }    
//  
//  //update books
//  @RequestMapping(value="/edit/updatebooks", method = RequestMethod.POST)
//  public RedirectView updateBooks(@ModelAttribute BookDetails book,BindingResult result) {
//    System.out.println(book.getId());
//    bookService.updateBook(book);
//    return new RedirectView("http://localhost:8081/viewbooks");  
//   }
//  
//  // ************** Delete Books **************
//  @RequestMapping(value="/delete/{id}",method = RequestMethod.GET)    
//  public RedirectView deleteBook(@PathVariable("id") Integer id){    
//      bookService.deleteBookById(id);
//      return new RedirectView("http://localhost:8081/viewbooks");    
//  }  
//  
//  //display all books
//  @RequestMapping("/viewbooks")
//  public String getAllBooks(Model m) {
//    List<BookDetails> allBooks = bookService.getBooks();
//    m.addAttribute("listofbooks", allBooks);
//    return "booklist";
//  }
//}
