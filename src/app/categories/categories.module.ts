import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { EidtComponent } from './components/eidt.component';
import { AddComponent } from './components/add.component';
import { DeleteComponent } from './components/delete.component';
import { ShowComponent } from './components/show.component';
import { IndexComponent } from './components/index.component';



@NgModule({
  declarations: [
    EidtComponent,
    AddComponent,
    DeleteComponent,
    ShowComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
