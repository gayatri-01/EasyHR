import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [

  // { path: "", component: LandingComponent },
  { path: "", component: HomeComponent },
  { path: "employee", component: EmployeeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
