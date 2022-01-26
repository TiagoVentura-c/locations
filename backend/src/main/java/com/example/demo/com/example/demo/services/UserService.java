package com.example.demo.com.example.demo.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.com.example.demo.entities.User;
import com.example.demo.com.example.demo.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository repository;
	
	@Transactional
	public List<User> findAll(){
		return repository.findAll();
	}
	
	@Transactional
	public Page<User> findAllPage(Pageable pageable){
		return repository.findAll(pageable);
	}

	@Transactional
	public User save(User user) {
		user.setMoment(LocalDate.now());
		return repository.save(user);
	}
	
	@Transactional
	public List<User> findByDate(String startDate, String endDate){
		
		System.out.println("----------------------"+startDate +" "+ endDate);
		
		return repository.findByDateBetween(LocalDate.parse(startDate), LocalDate.parse(endDate));
		
	}
	
	
	
	
}
