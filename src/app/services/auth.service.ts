import { Injectable } from '@angular/core';
import { MemeListService } from './meme-list.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UserInterface } from '../models/UserInserface';
import { Subject } from 'rxjs';
import { RegisterUserInterface } from '../models/RegisterUserInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: UserInterface[];
  private errMessageSource=new Subject<string>();
  errMessage$=this.errMessageSource.asObservable();
  constructor(private http:MemeListService, private router:Router) { }

  signIn(username:string, password:string){
    this.http.getAllUsers().subscribe(users=>{
      users.forEach(user => {
        console.log(user);
        if (username == user.username && password == user.password){
          console.log("utente trovato, pronto per il login");
          this.router.navigateByUrl("/home");
        }
      });
      console.log("utente non trovato");
      this.errMessageSource.next("utente non trovato");
    })
  }

  signUp(username:string, password:string){
    console.log(`username: ${username} , password: ${password}`);
    let newUser: RegisterUserInterface= {
      username: username, password:password
    };
    console.log(newUser);
    this.http.signUpNewUser(newUser).subscribe(utenteRegistrato=>{
      console.log("sto registrando un utente nuovo");
      console.log(utenteRegistrato);
    });
  }
}
