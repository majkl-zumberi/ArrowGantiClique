import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide=true;
  signUpForm: FormGroup;

  get usernameControl():FormControl{
    return this.signUpForm.get('username') as FormControl;
    }
    get passwordControl():FormControl{
    return this.signUpForm.get('password') as FormControl;
    }
  
  constructor(private fb:FormBuilder, private http:AuthService) {
    this.signUpForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
      });
   }

  ngOnInit(): void {
  }

  signUpUser(){
    this.http.signUp(this.usernameControl.value, this.passwordControl.value);
  }
  hideShowPassword(){
    event.preventDefault();
    this.hide = !this.hide;
  }

}
