import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private valSource=new Subject<string>();
  val$=this.valSource.asObservable();
  constructor() { }
  passToComp(val){
    this.valSource.next(val);
  }
}
