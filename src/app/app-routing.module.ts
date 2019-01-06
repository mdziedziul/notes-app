import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  {
    path: 'home', 
    component: NotesComponent
  },
  { 
    path: 'note/:id',
    component: NoteDetailComponent 
  },
  { 
    path: 'edit-note/:id',
    component: AddNoteComponent 
  },
  { 
    path: 'add-note',
    component: AddNoteComponent 
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}