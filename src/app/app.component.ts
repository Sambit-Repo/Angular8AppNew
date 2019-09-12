import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { LoginService } from './login.service';
import { LoginComponent} from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router : Router,private service : LoginService){}
  result;
  title = "Welcome To The Ness Login Page";
  onClickSubmit(data){
    this.service.validation(data);
    this.result=this.service.login();
  }
}
