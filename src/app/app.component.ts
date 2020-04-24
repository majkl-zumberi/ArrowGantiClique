import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ArrowGantiClique';
  navLinks: any[];
  activeLinkIndex = -1; 
  currentRoute: string;
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Homepage',
            link: './home',
            index: 0
        }, {
            label: 'Memes',
            link: './memes',
            index: 1
        },{
            label: 'Cards',
            link: './cards',
            index: 2
        },{
            label: 'FeedBack',
            link: './feedback',
            index: 3
        }, 
         {
            label: 'Profilo',
            link: './profilo',
            index: 4
        }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
      this.currentRoute=this.router.url.toString();
  });
  
}
}
