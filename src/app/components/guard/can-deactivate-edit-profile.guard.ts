import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateEditProfileGuard implements CanDeactivate<EditProfileComponent> {
  canDeactivate(
    component: EditProfileComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      console.log(component.editForm.status);

      if(component.editForm.dirty){
        alert("la form è sporca");
        return true;
        
        
  
    }


    
  }
  
}
