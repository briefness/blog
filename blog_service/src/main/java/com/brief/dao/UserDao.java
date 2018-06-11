package com.brief.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brief.entity.User;

public interface UserDao extends JpaRepository<User, Long>{
	
	public User findByUsername(String username);
}
