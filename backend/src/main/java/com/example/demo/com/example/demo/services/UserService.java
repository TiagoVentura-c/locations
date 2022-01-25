package com.example.demo.com.example.demo.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
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
	public User save(User user) {
		return repository.save(user);
	}
	
	
	
}
