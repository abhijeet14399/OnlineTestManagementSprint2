package com.cg.onlinetestmanagement.service;

import com.cg.onlinetestmanagement.entity.User;
import com.cg.onlinetestmanagement.exception.LoginException;

public interface LoginService {
    public User doLogin(String userId, String password)throws LoginException;
    public String encryptUser(User user);
    
}
