import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'
import { LoginService } from './../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result1;
  constructor(private service:LoginService,private comp:AppComponent) { }

  ngOnInit() 
  {
    this.result1=this.comp.result;
  }

}
