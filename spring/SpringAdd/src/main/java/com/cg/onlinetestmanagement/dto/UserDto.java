package com.cg.onlinetestmanagement.dto;
public class UserDto {
	private String uid;
	private String uname;

	private String pass;

	private String role;

	public UserDto(String uid, String uname, String pass, String role) {
		super();
		this.uid = uid;
		this.uname = uname;
		this.pass = pass;
		this.role = role;
	}

	public UserDto() {
		super();
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "UserDto [uid=" + uid + ", uname=" + uname + ", pass=" + pass + ", role=" + role + "]";
	}

	
}
