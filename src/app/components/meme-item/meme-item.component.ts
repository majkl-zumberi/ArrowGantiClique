import { Component, OnInit, Input } from '@angular/core';
import { MemeInterface } from 'src/app/models/memeInterface';

@Component({
  selector: 'app-meme-item',
  templateUrl: './meme-item.component.html',
  styleUrls: ['./meme-item.component.scss']
})
export class MemeItemComponent implements OnInit {

  @Input() memeItem:MemeInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
