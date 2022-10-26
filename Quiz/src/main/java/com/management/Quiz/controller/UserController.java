package com.management.Quiz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.management.Quiz.models.Users;
import com.management.Quiz.service.UserService;

@RestController
public class UserController {

  @Autowired
  private UserService userService;

  @RequestMapping(value = "/register", method = RequestMethod.POST)
  public Users registerUser(@RequestBody Users user) {
    System.out.println(user.getEmail());
    return userService.createUser(user);
  }
  
  @RequestMapping(value = "/login", method = RequestMethod.GET)
  public Users loginUser(@RequestBody Users user) {
    return userService.userLogin(user);
  }
}
