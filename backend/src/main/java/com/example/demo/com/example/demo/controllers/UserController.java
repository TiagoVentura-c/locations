package com.example.demo.com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.com.example.demo.entities.User;
import com.example.demo.com.example.demo.services.UserService;

@RestController
@RequestMapping(value = "/users")
public class UserController {

	@Autowired
	private UserService service;
	
	@GetMapping
	public ResponseEntity<List<User>> getAll(){
		List<User> list = service.findAll();
		
		return ResponseEntity.ok(list);
	}
	
	@PostMapping
	public ResponseEntity<User> save(@RequestBody User user){
		User userSaved = service.save(user);
		return ResponseEntity.accepted().body(user);
	}
	
}
