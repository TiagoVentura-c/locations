package com.example.demo.com.example.demo.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.com.example.demo.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
  @Query("SELECT obj FROM User obj WHERE obj.moment >= :startDate AND obj.moment <= :endDate ")
  List<User> findByDateBetween(LocalDate startDate, LocalDate endDate);

}
