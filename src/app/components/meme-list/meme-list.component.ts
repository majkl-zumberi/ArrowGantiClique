import { Component, OnInit } from '@angular/core';
import { MemeListService } from 'src/app/services/meme-list.service';
import { MemeInterface } from 'src/app/models/memeInterface';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-meme-list',
  templateUrl: './meme-list.component.html',
  styleUrls: ['./meme-list.component.scss'],
})
export class MemeListComponent implements OnInit {
  isActiveTutti:boolean;
  isActiveFav:boolean;
  isActiveHidden:boolean;
  isInPreferiti:boolean=false;
  memes:MemeInterface[];
  nextPageMemes:MemeInterface[];
  pageCounter:number=1;
  loadcontent:boolean;
  allMemes:MemeInterface[];
  constructor(private listService:MemeListService,private serviceConnector:FilterService) { 
  }

  ngOnInit(): void {
    this.isActiveTutti=true;
    this.isActiveFav=false;
    this.isActiveHidden=false;
    this.loadcontent=true;
    this.listService.getAllMemes(this.pageCounter).subscribe(memes=>{
      this.memes=memes;
      console.table(this.memes);
     
    });
    this.listService.getAllMemesNotByPage().subscribe(allMemes=>{
      this.allMemes=allMemes;
    })

    this.serviceConnector.val$.subscribe(text=>{
      console.log(`sto ricevendo dal service connector: ${text}`);
      this.listService.filterMemeByText(text).subscribe(listaFiltrata=>{
        this.memes=listaFiltrata;
        console.log("nuova lista filtrata");
        console.log(listaFiltrata);
      })
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
              this.memes.push(meme);
          })
        }
      })
    }
  }
  filterByFav(){
    this.isActiveTutti=false;
    this.isActiveHidden=false;
    this.isActiveFav=true;
    this.loadcontent=false;
    this.isInPreferiti=true;
    console.log("pronto per filtrare la lista in base ai preferiti");
    let currentUser=JSON.parse(sessionStorage.getItem("utente")).id;
    this.listService.getFilterListByFav(currentUser)
    .subscribe(filteredPosts=>{
      let favMemes=[];
      console.table(filteredPosts);
      this.allMemes.forEach(meme=>{
        filteredPosts.forEach(post=>{
          if(post.idPost == meme.id){
            favMemes.push(meme);
          }
        })
      })
      this.memes=favMemes;
    })
  }

  initPosts(){
    console.log("reimposto tutti i post..");
    this.ngOnInit();
  }

}
