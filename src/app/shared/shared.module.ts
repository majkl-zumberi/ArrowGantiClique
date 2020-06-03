import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MemeItemDirective } from './directives/meme-item.directive';



@NgModule({
  declarations: [MemeItemDirective],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    
  ],
  exports:[
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MemeItemDirective
  ]
})
export class SharedModule { }
