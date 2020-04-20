import { Component, OnInit } from '@angular/core';
import { MemeListService } from 'src/app/services/meme-list.service';
import { MemeInterface } from 'src/app/models/memeInterface';

@Component({
  selector: 'app-meme-list',
  templateUrl: './meme-list.component.html',
  styleUrls: ['./meme-list.component.scss']
})
export class MemeListComponent implements OnInit {

  memes:MemeInterface[];
  nextPageMemes:MemeInterface[];
  pageCounter:number=1;
  loadcontent:boolean;
  constructor(private listService:MemeListService) { }

  ngOnInit(): void {
    this.loadcontent=true;
    this.listService.getAllMemes(this.pageCounter).subscribe(memes=>{
      this.memes=memes;
      console.table(this.memes);
    });
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
            this.memes.push(meme);
          })
        }
      })
    }
  }

}
