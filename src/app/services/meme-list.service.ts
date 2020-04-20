import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemeInterface } from '../models/memeInterface';

@Injectable({
  providedIn: 'root'
})
export class MemeListService {

  private memeListUrl:string='http://my-json-server.typicode.com/majkl-zumberi/meme-list-api/memes';

  constructor(private http:HttpClient) { }

  getAllMemes(page:number):Observable<MemeInterface[]>{
    return this.http.get<MemeInterface[]>(`${this.memeListUrl}?_page=${page}&_limit=5`);
  }
}
