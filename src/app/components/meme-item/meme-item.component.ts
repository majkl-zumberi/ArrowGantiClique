import { Component, OnInit, Input } from '@angular/core';
import { MemeInterface } from 'src/app/models/memeInterface';
import { MemeListService } from 'src/app/services/meme-list.service';
import { Session } from 'protractor';

@Component({
  selector: 'app-meme-item',
  templateUrl: './meme-item.component.html',
  styleUrls: ['./meme-item.component.scss']
})
export class MemeItemComponent implements OnInit {

  @Input() memeItem:MemeInterface;
  favMemes:any;
  isinFavorite:boolean=false;
  userId: number;
  constructor(private http:MemeListService) {
    this.userId=JSON.parse(sessionStorage.getItem("utente")).id;
  }

  ngOnInit(): void {
    console.log(`ora  l'idUtente: ${this.userId} e il postid: ${this.memeItem.id}`)
    this.http.getAllFav(this.userId,this.memeItem.id).subscribe(favMemes=>{
      this.favMemes=favMemes;
      this.favMemes.length>0 ? this.isinFavorite=true :this.isinFavorite=false;
      
    })
  }

  hideMeme(memeId:number){
    console.log("pronto per nascondere l'id"+memeId);
  }
  setToFavorite(memeId:number){
    console.log("pronto per mettere/togliere preferiti l'id"+memeId);
    this.isinFavorite=!this.isinFavorite;
    console.log(`is favorite: ${this.isinFavorite}`);
    console.log(JSON.parse(sessionStorage.getItem("utente")).id);
    if(this.isinFavorite){
      this.http.setFav({"idUtente":JSON.parse(sessionStorage.getItem("utente")).id ,"idPost":this.memeItem.id}).subscribe(ritorno=>{
        console.log(ritorno);
      });
    }
    else{
      this.http.remFav(this.favMemes[0].id).subscribe(ritorno=>{
        console.log(ritorno);
      });
    }
  }
}
