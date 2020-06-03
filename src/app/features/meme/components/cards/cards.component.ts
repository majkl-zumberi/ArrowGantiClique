import { Component, OnInit } from '@angular/core';
import { MemeListService } from 'src/app/core/services/meme-list.service';
import { MemeInterface } from 'src/app/core/models/memeInterface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  list:MemeInterface[];
  loadcontent:boolean;
  pageCounter:number=1;
  constructor(private listService:MemeListService) { }

  ngOnInit(): void {
    this.loadcontent=true;
    this.listService.getAllMemes(this.pageCounter).subscribe(list=>{
      this.list=list;
    })
  }
  loadMoreContent(){
    if(this.loadcontent){
      this.pageCounter++;
      console.log("preparing content.."+this.pageCounter);
      this.listService.getAllMemes(this.pageCounter).subscribe(memes=>{
        if(memes.length == 0){
          console.log("non ci sono altri memes da caricare!");
          this.loadcontent=false;
        }else{
          
          memes.forEach(meme=>{
              this.list.push(meme);
          });
         
        }
      })
    }
  }
}
