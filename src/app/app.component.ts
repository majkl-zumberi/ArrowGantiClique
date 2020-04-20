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
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Homepage',
            link: './home',
            index: 0
        }, {
            label: 'memes',
            link: './memes',
            index: 1
        }, {
            label: 'FeedBack',
            link: './feedback',
            index: 2
        }, 
         {
            label: 'Profilo',
            link: './register',
            index: 3
        }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}
