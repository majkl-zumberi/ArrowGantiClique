import { Injectable } from '@angular/core';
import { MemeListService } from './meme-list.service';
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
          let UserLogged: UserInterface= {
            id:user.id, username: username, password: password, nome:user.nome, cognome:user.cognome, sesso:user.sesso, email:user.email, telefono:user.telefono
          };
          sessionStorage.setItem("utente", JSON.stringify(UserLogged));
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
      username: username, password:password, favorites:[], hidden:[], nome:"", cognome:"", sesso:"", email:"", telefono:""
    };
    console.log(newUser);
    this.http.signUpNewUser(newUser).subscribe(utenteRegistrato=>{
      console.log("sto registrando un utente nuovo");
      console.log(utenteRegistrato);
      this.router.navigateByUrl("/login");
    });
  }
}
