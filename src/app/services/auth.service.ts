import { Injectable } from '@angular/core';
import { MemeListService } from './meme-list.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: any;

  constructor(private http:MemeListService) { }

  storeUsers(){
    this.http.getAllUsers().subscribe(users=>{
      console.log(users);
      this.users=users;
    })
  }

  signIn(username:string, password:string){
    this.storeUsers();
  }
}
