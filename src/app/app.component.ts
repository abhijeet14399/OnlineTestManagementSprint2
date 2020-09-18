import { StorageService } from './storage.service';
import { AdminService } from './admin.service';
import { Admin } from './admin';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online Test Management Dashboard';

  
  msg:string;
  errorMsg:string;
  loginflag:boolean=false;
 
  login:Admin = new Admin();
  userName:string;
  role:string;
  constructor(private admService:AdminService, private router:Router, private storageService:StorageService){
    if (localStorage.getItem("tokenId") != null){
     let userstr = localStorage.getItem("tokenId");
     console.log(userstr.split("-")[1]);
     this.userName=this.admService.decrypt(userstr.split("-")[1]);
     this.loginflag=true;
     this.role=this.admService.decrypt(userstr.split("-")[2]);
    }
       
  }
  
  ngOnInit(): void {
   this.storageService.watchStorage().subscribe(data=>{
     console.log(data);
      if(data != null && data == "set"){
        this.loginflag=true;
        let userstr = localStorage.getItem("tokenId");
        console.log(userstr.split("-")[2]);
        this.userName=this.admService.decrypt(userstr.split("-")[1]);
        this.role=this.admService.decrypt(userstr.split("-")[2]);
     }
     else
        this.loginflag=false;
   });
 }
  
  logout(): void {
   this.admService.doLogout().subscribe(data=>{console.log(data);
     this.storageService.removeItem("tokenId");
     alert("Yoy have logged out");
     this.loginflag=false;
     this.router.navigateByUrl("/");
     
   });
  }
}
