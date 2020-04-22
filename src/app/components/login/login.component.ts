import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true;
  loginForm: FormGroup;

  get usernameControl():FormControl{
    return this.loginForm.get('username') as FormControl;
    }
    get passwordControl():FormControl{
    return this.loginForm.get('password') as FormControl;
    }


  constructor(private fb:FormBuilder) {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
      });
   }

  ngOnInit(): void {
  }

  loginUser(){
    this.usernameControl.value,
    this.passwordControl.value
    console.log("username:"+this.usernameControl.value);
    console.log("password:"+this.passwordControl.value);

  }

}
