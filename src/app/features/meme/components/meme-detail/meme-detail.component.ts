import { Component, OnInit } from '@angular/core';
import { MemeListService } from 'src/app/core/services/meme-list.service';
import { ActivatedRoute } from '@angular/router';
import { MemeInterface } from 'src/app/core/models/memeInterface';

@Component({
  selector: 'app-meme-detail',
  templateUrl: './meme-detail.component.html',
  styleUrls: ['./meme-detail.component.scss']
})
export class MemeDetailComponent implements OnInit {
  memePost:MemeInterface;
  constructor(private listService:MemeListService ,private Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.Activatedroute.paramMap.subscribe(params => { 
      this.listService.getMemeById(Number(params.get('id'))).subscribe(meme =>{
        this.memePost=meme;
      })
       });
    
  }

}
