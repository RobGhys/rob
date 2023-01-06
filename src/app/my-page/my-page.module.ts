import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPageComponent } from './my-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
    declarations: [
        MyPageComponent
    ],
    exports: [
        MyPageComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MyPageModule { }
