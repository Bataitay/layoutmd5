import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from '../employee/components/edit.component';
import { AddComponent } from './components/add.component';
import { DeleteComponent } from './components/delete.component';
import { IndexComponent } from './components/index.component';
import { ShowComponent } from './components/show.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: '/add', component: AddComponent },
  { path: 'edit', component: EditComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'show', component: ShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
