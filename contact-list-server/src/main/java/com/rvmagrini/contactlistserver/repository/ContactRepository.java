package com.rvmagrini.contactlistserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rvmagrini.contactlistserver.model.Contact;

// JPA Repository: allows us to use a lot of database methods such as: save, find by id, sort, delete by id, etc
@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

}
