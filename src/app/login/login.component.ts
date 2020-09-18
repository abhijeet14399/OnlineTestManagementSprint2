import { AdminService } from './../admin.service';
import { StorageService } from './../storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string;
  pwd:string;
  msg:string;
  constructor(private router:Router, private storageservice:StorageService, 
    private admService:AdminService) { }

  ngOnInit(): void {
  }
  doLogin(){
    this.admService.doLogin(this.uname , this.pwd).subscribe(data=>{
      this.storageservice.setItem("tokenId", data);
      this.msg=undefined;
     this.router.navigateByUrl("/");
    },
      error=>{this.msg=JSON.parse(error.error).message});
           
  }
}
