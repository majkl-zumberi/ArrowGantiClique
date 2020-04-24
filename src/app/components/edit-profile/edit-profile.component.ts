import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserInterface } from 'src/app/models/UserInserface';
import { MemeListService } from 'src/app/services/meme-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  currentUser: UserInterface;
  editForm: FormGroup;


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


  constructor(private fb:FormBuilder, private listService:MemeListService, private router:Router) {

    this.editForm = this.fb.group({
      editName:[""],
      editSurname:[""],
      editGender:[""],
      editEmail:[""],
      editTel:[""]
    })

   }

  ngOnInit(): void {

    this.currentUser = JSON.parse( sessionStorage.getItem('utente'));
  }

  editUser(){
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
