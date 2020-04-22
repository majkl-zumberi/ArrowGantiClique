import { Injectable } from '@angular/core';
import { MemeListService } from './meme-list.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: any;

  constructor(private http:MemeListService) { }

  signIn(username:string, password:string){
    this.http.getAllUsers().subscribe(users=>{
      users.forEach(user => {
        console.log(user);
      });
     
    })
  }
}
