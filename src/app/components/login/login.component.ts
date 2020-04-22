import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true;
  loginError:string='';
  loginForm: FormGroup;

  get usernameControl():FormControl{
    return this.loginForm.get('username') as FormControl;
    }
    get passwordControl():FormControl{
    return this.loginForm.get('password') as FormControl;
    }


  constructor(private fb:FormBuilder, private auth:AuthService) {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
      });
   }

  ngOnInit(): void {
  }

  loginUser(){
    console.log("username:"+this.usernameControl.value);
    console.log("password:"+this.passwordControl.value);
    this.auth.signIn(this.usernameControl.value, this.passwordControl.value);
    this.auth.errMessage$.subscribe(message=>{
      this.loginError=message;
      console.log(message);
    });
  }

}
