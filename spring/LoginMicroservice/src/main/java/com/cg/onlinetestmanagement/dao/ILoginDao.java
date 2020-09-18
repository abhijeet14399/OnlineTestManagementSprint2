package com.cg.onlinetestmanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.onlinetestmanagement.entity.User;

@Repository
public interface ILoginDao extends JpaRepository<User, String>{

	
}
