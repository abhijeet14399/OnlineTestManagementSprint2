package com.cg.onlinetestmanagement.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.onlinetestmanagement.dto.UserDto;
import com.cg.onlinetestmanagement.service.AddService;

@RestController
@CrossOrigin(value = "http://localhost:4200")
public class Controller {
	@Autowired
	private AddService addservice;

	@PostMapping("/addstudent")
	public String addStudent(@Valid @RequestBody UserDto udto, BindingResult br) {
		String str = addservice.addUser(udto);
		return str;

	}

}
