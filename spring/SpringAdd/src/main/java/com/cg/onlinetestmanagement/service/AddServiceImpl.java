package com.cg.onlinetestmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cg.onlinetestmanagement.AdmDao.UserDao;
import com.cg.onlinetestmanagement.dto.UserDto;
import com.cg.onlinetestmanagement.entity.User;

@Service
public class AddServiceImpl implements AddService {

	@Autowired
	private UserDao udao;

	@Override
	@Transactional(readOnly = false)
	public String addUser(UserDto udto) {

		User user = new User();
		user.setUserID(udto.getUid());
		user.setUserName(udto.getUname());
		user.setPassword(udto.getPass());
		user.setRole(udto.getRole());
		// user.setUserCollegeName(udto.getUserCollegeName());
		if (udao.existsById(user.getUserID())) {
			return "User Id already exist";
		} else {
			udao.save(user);
			// return user.getUserID();
			return "account created successfully for user id " + user.getUserID() ;
		}
	}
}
