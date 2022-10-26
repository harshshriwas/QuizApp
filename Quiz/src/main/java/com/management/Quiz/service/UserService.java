package com.management.Quiz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.management.Quiz.models.Users;
import com.management.Quiz.repository.UserRepository;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  // register
  public Users createUser(Users user) {
    if (user != null) {
      Users existUser = userRepository.findByEmail(user.getEmail());

      if (existUser != null) {

        throw new RuntimeException("User is alerdy register..");
      } else {
        return userRepository.save(user);
      }

    } else {
      return null;
    }
  }

  // login
  public Users userLogin(Users user) {
    Users userinfo =  userRepository.getByEmailPassword(user.getEmail(), user.getPassword());
    if(userinfo != null)
    {
      return userinfo;
    }
    else {
     throw new RuntimeException("User Not Found!.."); 
    }
  }

}
