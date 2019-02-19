package com.user;

//import java.awt.print.Pageable;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;


@Transactional
public interface UserRepository extends JpaRepository<User, Long> {

	public User findByName(String name);
	public User findById(long id);

}