import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemeInterface } from '../models/memeInterface';
import { UserInterface } from '../models/UserInserface';
import { RegisterUserInterface } from '../models/RegisterUserInterface';

const httpOptions= {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})


export class MemeListService {

  private memeListUrl:string='http://my-json-server.typicode.com/majkl-zumberi/meme-list-api/memes';
  private memeUsersUrl:string="http://localhost:3000/users";

  constructor(private http:HttpClient) { }

  getAllMemes(page:number):Observable<MemeInterface[]>{
    return this.http.get<MemeInterface[]>(`${this.memeListUrl}?_page=${page}&_limit=5`);
  }

  getAllUsers():Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(`${this.memeUsersUrl}`);
  }

  signUpNewUser(user:RegisterUserInterface):Observable<any>{
    return this.http.put(this.memeUsersUrl , user, httpOptions);
  }
}
