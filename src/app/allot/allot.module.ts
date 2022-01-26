import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { AllotComponent } from './components/allot/allot.component';
import { MaterialModule } from '../material/material.module';
import { NgxFileDropModule } from 'ngx-file-drop';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AllotComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    NgxFileDropModule
  ],
  exports:[
    AllotComponent
  ]
})
export class AllotModule { }
