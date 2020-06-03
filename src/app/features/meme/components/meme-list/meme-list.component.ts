import { Component, OnInit } from '@angular/core';
import { MemeListService } from 'src/app/core/services/meme-list.service';
import { MemeInterface } from 'src/app/core/models/memeInterface';
import { FilterService } from 'src/app/core/services/filter.service';
import { HidFavInterface } from 'src/app/core/models/HidFavInterface';

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
  hiddenPosts: HidFavInterface[];
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
      this.listService.getAllHidden(JSON.parse(sessionStorage.getItem('utente')).id).subscribe(hiddenPosts=>{
        this.hiddenPosts=hiddenPosts;
        console.table(this.hiddenPosts);
        this.hiddenPosts.forEach(hidden=>{
          this.memes = this.memes.filter(obj => obj.id !== hidden.idPost);
        })
      })
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
          });
          this.hiddenPosts.forEach(hidden=>{
            this.memes = this.memes.filter(obj => obj.id !== hidden.idPost);
          });
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
  filterByHidden(){
    console.log("qui mostro tutti i post che ha nascosto l'utente");
    this.isActiveTutti=false;
    this.isActiveHidden=true;
    this.isActiveFav=false;
    this.loadcontent=false;
    this.isInPreferiti=false;
    let tempMeme:MemeInterface[];
    this.memes=[];
    this.hiddenPosts.forEach(hidden=>{
      tempMeme= this.allMemes.filter(obj => obj.id == hidden.idPost);
      this.memes.push(tempMeme[0]);
    })
  }
  initPosts(){
    console.log("reimposto tutti i post..");
    this.ngOnInit();
  }

  removeFromList(idList){
    console.log("ho ricevuto dal child l'id da nascondere "+idList);
    this.memes = this.memes.filter(obj => obj.id !== idList);
  }

}
