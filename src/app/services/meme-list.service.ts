import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemeInterface } from '../models/memeInterface';
import { UserInterface } from '../models/UserInserface';
import { RegisterUserInterface } from '../models/RegisterUserInterface';
import { HidFavInterface } from '../models/HidFavInterface';

const httpOptions= {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})


export class MemeListService {

//old http://my-json-server.typicode.com/majkl-zumberi/meme-list-api/memes
  private dbUrl:string='http://localhost:3000';
  private memeListUrl:string='http://localhost:3000/memes';
  private memeUsersUrl:string="http://localhost:3000/users";
  private memeFavUrl:string="http://localhost:3000/favorites";
  private memeHiddenUrl:string="http://localhost:3000/hidden";
  private filterGlobal:string='?q=';
  constructor(private http:HttpClient) { }

  //by page
  getAllMemes(page:number):Observable<MemeInterface[]>{
    return this.http.get<MemeInterface[]>(`${this.memeListUrl}?_page=${page}&_limit=5`);
  }

  getAllUsers():Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(`${this.memeUsersUrl}`);
  }

  signUpNewUser(user:RegisterUserInterface):Observable<any>{
    return this.http.post(this.memeUsersUrl , user, httpOptions);
  }

  setFav(fav):Observable<any>{
    return this.http.post(`${this.memeFavUrl}`,fav, httpOptions)
  }

  remFav(fav):Observable<any>{
    return this.http.delete(`${this.memeFavUrl}/${fav}`, httpOptions)
  }

  getAllFav(idUtente:number,idPost):Observable<any>{
    return this.http.get<any>(`${this.memeFavUrl}?idUtente=${idUtente}&idPost=${idPost}`);
  }

  getFilterListByFav(idUser: number):Observable<any> {
    return this.http.get<any>(`${this.memeFavUrl}?idUtente=${idUser}`);
  }
  getAllMemesNotByPage():Observable<MemeInterface[]>{
    return this.http.get<MemeInterface[]>(this.memeListUrl);
  }

  updateUser(User:UserInterface, id:number):Observable<UserInterface>{
    const url=`${this.memeUsersUrl}/${id}`;
    return this.http.patch<UserInterface>(url, User, httpOptions);

  }
  getMemeById(id:number):Observable<MemeInterface>{
    return this.http.get<MemeInterface>(`${this.memeListUrl}/${id}`);
  }
  filterMemeByText(searchBy:string):Observable<MemeInterface[]>{
    return this.http.get<MemeInterface[]>(`${this.memeListUrl}${this.filterGlobal}${searchBy}`);
  }
  setHide(fav):Observable<any>{
    return this.http.post(`${this.memeHiddenUrl}`,fav, httpOptions)
  }
  getAllHidden(idUtente):Observable<HidFavInterface[]>{
    return this.http.get<HidFavInterface[]>(`${this.memeHiddenUrl}?IdUtente=${idUtente}`);
  }
}
