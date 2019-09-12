import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  validation(data)
  {
    if(data.username =="sambit" && data.password == "123456")
    {
      alert("login Works");
    }
    else
    {
      alert("Incorrect Credentials");
    }
  }
  login()
  {
    return "login successful";
  }
}
