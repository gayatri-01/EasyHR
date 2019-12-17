import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  user: string = "";
  name : string = "";

  constructor(public router: Router) {

  }
  Hello() {
    console.log("Hello");
  }
  logout() {
    this.user = "";
  }



}
