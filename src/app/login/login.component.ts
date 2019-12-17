import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { EmpDataService } from '../services/emp-data.service';
import { IEmployee } from '../employee';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm: FormGroup;
  currentUser: IEmployee;
  errorMessage: string;

  constructor(public router: Router, private _appcomp: AppComponent, private emp: EmpDataService) {
    this.myForm = new FormGroup({
      username: new FormControl('', [Validators.required,]),
      password: new FormControl('', [Validators.required]),

    });
    this.errorMessage = "";
  }
  get username() {
    return this.myForm.get('username');
  }

  get password() {
    return this.myForm.get('password');
  }
  revert() {
    this.myForm.reset();
    this.errorMessage = "";
  }

  onSubmit(form: FormGroup) {
    // ...
    console.log('Valid?', form.valid); // true or false
    console.log('Username', form.value.username);
    console.log('Password', form.value.password);

    this.emp.getEmpData(form.value.username, form.value.password).subscribe(
      data => {
      this.currentUser = data;
        if (this.currentUser) {
          this._appcomp.user = this.currentUser.username;
          this._appcomp.name = this.currentUser.name;
          this.router.navigate(['']);

        } else {
          this.errorMessage = "Invalid Credentials! Try Again!"
        }
      }
    );



  }


}
