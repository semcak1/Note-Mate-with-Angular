import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { MainLAyoutComponent } from './pages/main-layout/main-layout.component';

const routes: Routes = [
  
  {path:'', component:MainLAyoutComponent, children:[
    {path:'', component:NotesListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
