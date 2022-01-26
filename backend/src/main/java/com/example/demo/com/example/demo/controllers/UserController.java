package com.example.demo.com.example.demo.controllers;

import java.time.Instant;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@GetMapping(value="/page")
	public ResponseEntity<Page<User>> getAllPage(Pageable pageable){
		Page<User> list = service.findAllPage(pageable);
		return ResponseEntity.ok(list);
	}
	
	@PostMapping
	public ResponseEntity<User> save(@RequestBody User user){
		User userSaved = service.save(user);
		return ResponseEntity.ok().body(user);
	}
	
	@GetMapping(value="/date")
	public ResponseEntity<List<User>> getByDate(@RequestParam(name = "startDate", required = true) String startDate, 
			@RequestParam(name = "endDate", required = true) String endDate){
		
		
		List<User> users = service.findByDate(startDate, endDate);
		return ResponseEntity.ok(users);
	}
	
	
	 
	
	
}
