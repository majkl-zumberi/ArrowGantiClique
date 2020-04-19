import { Component, OnInit, Input } from '@angular/core';
import { MemeInterface } from 'src/app/models/memeInterface';

@Component({
  selector: 'app-meme-item',
  templateUrl: './meme-item.component.html',
  styleUrls: ['./meme-item.component.scss']
})
export class MemeItemComponent implements OnInit {

  @Input() memeItem:MemeInterface;
  isinFavorite:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  hideMeme(memeId:number){
    console.log("pronto per nascondere l'id"+memeId);
  }
  setToFavorite(memeId:number){
    console.log("pronto per mettere/togliere preferiti l'id"+memeId);
    this.isinFavorite=!this.isinFavorite;
  }
}
