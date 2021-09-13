package com.rvmagrini.contactlistserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rvmagrini.contactlistserver.exception.ResourceNotFoundException;
import com.rvmagrini.contactlistserver.model.Contact;
import com.rvmagrini.contactlistserver.repository.ContactRepository;

// CrossOrigin: handling block of CORs policy
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ContactController {
	
	@Autowired
	private ContactRepository contactRepository;
	
	// Get all contacts
	@GetMapping("/contacts")
	public List<Contact> getAllContacts() {
		return contactRepository.findAll();
	}
	
	
	// Create Contact REST API
	@PostMapping("/contacts")
	public Contact addContact(@RequestBody Contact contact) {
		return contactRepository.save(contact);
	}
	
	// Get Contact by ID Rest API
	@GetMapping("/contacts/{id}")
	public ResponseEntity<Contact> getContactById(@PathVariable Long id) {
		Contact contact = contactRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Contact with id " + id + "does not exist."));
		return ResponseEntity.ok(contact);
	}
	
	
	

}
