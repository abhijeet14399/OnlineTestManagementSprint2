import { AdminService } from './../admin.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Admin } from '../admin';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  adm:Admin= new Admin();
  msg:string;
  errorMsg:string;
  userName = this.admservice.userName;
  errors:string[];
  @ViewChild("frm")
  form:NgForm
  constructor(private admservice:AdminService) { }

  ngOnInit(): void {}
  addUsr(){
    this.admservice.addUser(this.adm)
        .subscribe((data)=>{console.log("data" ,data);
                            this.msg=data;this.errorMsg=undefined;this.errors = undefined;
                            this.adm=new Admin();this.form.reset()},
      error=>{console.log(error);
              this.errorMsg =JSON.parse(error.error).message;this.msg=undefined;
              this.errors = JSON.parse(error.error).messages});
  }
}
