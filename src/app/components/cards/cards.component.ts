import { Component, OnInit } from '@angular/core';
import { MemeListService } from 'src/app/services/meme-list.service';
import { MemeInterface } from 'src/app/models/memeInterface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  list:MemeInterface[];
  constructor(private listService:MemeListService) { }

  ngOnInit(): void {
    this.listService.getAllMemesNotByPage().subscribe(list=>{
      this.list=list;
    })
  }

}
