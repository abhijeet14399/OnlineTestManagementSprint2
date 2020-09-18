import { ViewadminComponent } from './viewadmin/viewadmin.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'viewadmin',component:ViewadminComponent},
  {path:'login',component:LoginComponent},
  {path:'adduser',component:AdduserComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
