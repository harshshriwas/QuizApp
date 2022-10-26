package com.management.Quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.management.Quiz.models.Users;

public interface UserRepository extends JpaRepository<Users, Integer> {

  @Query("select u from Users u where u.email=:email and u.password=:password")
  Users getByEmailPassword(@Param("email") String email,@Param("password") String password);

  @Query("select u from Users u where u.email=:email")
  Users findByEmail(@Param("email") String email);

}
