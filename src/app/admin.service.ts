
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { Admin } from './admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
userName:string;
  constructor(private http:HttpClient,private router:Router) { }

  
  public doLogin(userId:string, pwd:string):Observable<any>{
    let postData = new FormData();
    postData.append('userid' , userId);
    postData.append('password' , this.encrypt(pwd));

    return this.http.post("http://localhost:7082/springlogin/login",postData, {responseType:'text'});
  }

  encrypt(token: string):string {
    let str = "";
    for (let i = 0; i < token.length; ++i) {
        str = str + String.fromCharCode(token.charCodeAt(i) + 3);
    }
    return str;
  }

  decrypt(token: string):string {
    let str = "";
    for (let i = 0; i < token.length; ++i) {
      if(str.charAt(i)== "/")
         str= str + ' ';
      else
        str = str + String.fromCharCode(token.charCodeAt(i) - 3);
    }
    return str;
}
public doLogout(){
  let utoken = localStorage.getItem("token");
  if(utoken == null) utoken="";
  const httpHeaders = new HttpHeaders({"tokenid": utoken});
  return this.http.get("http://localhost:7082/springlogin/logout",
                          {headers:httpHeaders,responseType:'text'});
                         // this.router.navigateByUrl("/");
}
public addUser(adm:Admin):Observable<any>{
  let utoken = localStorage.getItem("tokenId");
  if(utoken == null) utoken="";
  const httpHeaders = new HttpHeaders({"tokenId": utoken});
  return this.http.post("http://localhost:7081/springadd/addstudent",adm, {headers:httpHeaders,responseType:'text'});
}
}
