import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserInterface } from 'src/app/models/UserInserface';
import { MemeListService } from 'src/app/services/meme-list.service';
import { Router } from '@angular/router';
import { EditFormInterface } from 'src/app/models/EditFormInterface';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  currentUser: UserInterface;
  editForm: FormGroup;
  infoUtenteForm: EditFormInterface;
  canExit:boolean=false;


  get nameControl():FormControl{
    return this.editForm.get('editName') as FormControl;
    }
  
  get surnameControl():FormControl{
    return this.editForm.get('editSurname') as FormControl;
    }

  get genderControl():FormControl{
    return this.editForm.get('editGender') as FormControl;
    }

  get emailControl():FormControl{
    return this.editForm.get('editEmail') as FormControl;
    }

  get telControl():FormControl{
    return this.editForm.get('editTel') as FormControl;
    }
  
  get formValues():EditFormInterface{
    let form:EditFormInterface={
      nome:this.nameControl.value,
      cognome:this.surnameControl.value,
      sesso:this.genderControl.value,
      email:this.emailControl.value,
      telefono:this.telControl.value
    }
    return form;
  }


  constructor(private fb:FormBuilder, private listService:MemeListService, private router:Router) {

    let infoUtente = JSON.parse( sessionStorage.getItem('utente'));
    this.infoUtenteForm={
      nome:infoUtente.nome,
      cognome:infoUtente.cognome,
      sesso:infoUtente.sesso,
      email:infoUtente.email,
      telefono:infoUtente.telefono
    };
    this.editForm = this.fb.group({
      editName:[infoUtente.nome],
      editSurname:[infoUtente.cognome],
      editGender:[infoUtente.sesso],
      editEmail:[infoUtente.email],
      editTel:[infoUtente.telefono]
    })

   }
   

  ngOnInit(): void {

    this.currentUser = JSON.parse( sessionStorage.getItem('utente'));

  }

  exit(){
    this.canExit=true;
    this.router.navigateByUrl('/profilo');
  }

  editUser(){
    this.canExit=true;
    console.log("pronto per la submit della form");
    console.log(this.nameControl.value);
    console.log(this.surnameControl.value);
    console.log(this.genderControl.value);
    console.log(this.emailControl.value);
    console.log(this.telControl.value);

    let idUser = JSON.parse( sessionStorage.getItem('utente')).id;
    let usernameUser = JSON.parse( sessionStorage.getItem('utente')).username;
    let passwordUser = JSON.parse( sessionStorage.getItem('utente')).password;
    sessionStorage.removeItem('utente');
    let User:UserInterface = {
      id:idUser,
      nome:this.nameControl.value,
      cognome:this.surnameControl.value,
      sesso:this.genderControl.value,
      email:this.emailControl.value,
      telefono:this.telControl.value,
      username:usernameUser,
      password:passwordUser

    }

    sessionStorage.setItem('utente', JSON.stringify(User));
    this.listService.updateUser(User, idUser).subscribe(user => {
      console.log("utente aggiornato con successo zio");
      this.router.navigateByUrl('/profilo');
    })

    
  }

}
