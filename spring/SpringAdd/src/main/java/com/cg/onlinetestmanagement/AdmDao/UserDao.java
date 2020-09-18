package com.cg.onlinetestmanagement.AdmDao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.onlinetestmanagement.entity.User;

@Repository
public interface UserDao extends JpaRepository<User,String> {
	

}
