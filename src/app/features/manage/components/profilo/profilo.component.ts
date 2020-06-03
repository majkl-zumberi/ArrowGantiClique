import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/core/models/UserInserface';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {
 currentUser:UserInterface;
  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse( sessionStorage.getItem('utente'));
   console.log(this.currentUser);
  }

}
