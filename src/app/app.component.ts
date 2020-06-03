import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { FilterService } from './core/services/filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ArrowGantiClique';
  navLinks: any[];
  activeLinkIndex = -1; 
  currentRoute: string;
  constructor(private router: Router, private auth:AuthService,private serviceConnector:FilterService) {
    this.navLinks = [
        {
            label: 'Homepage',
            link: './homepage/home',
            index: 0
        }, {
            label: 'Memes',
            link: './meme/list',
            index: 1
        },{
            label: 'Cards',
            link: './meme/cards',
            index: 2
        },{
            label: 'FeedBack',
            link: './feed/feedback',
            index: 3
        }, 
         {
            label: 'Profilo',
            link: './manage/profilo',
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
signOut(){
    this.auth.logOut();
}
filter(filterInput){
    console.log("ricevo da html "+filterInput);
    this.serviceConnector.passToComp(filterInput);
}
}
