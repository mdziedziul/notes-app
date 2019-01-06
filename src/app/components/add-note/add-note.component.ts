import { Component, OnInit } from '@angular/core';
import { PageHeaderSetts } from '../page-header/models/pageHeaderSetts';
import { Note } from 'src/app/models/notes.model';
import { NotesService } from '../../services/notes/notes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  newNote: Note;

  headerSetts: PageHeaderSetts = {
    title: "Nova poznamka",
    backTitle: "backNote",
    backToRouter: ["/"]
  }

  constructor(
    private noteService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.route.paramMap);
    this.route.paramMap.subscribe(parameterMap => {
      const id = parameterMap.get('id');
      this.getNote(id);
    })
  }

  private getNote(id) {
    if(id === null) {
      this.newNote = {
        name: null,
        body: null
      };
    } else {
      this.noteService.getNoteById(id).subscribe((note) => {
        this.newNote = note;
      });
    }
  }

  saveNote() {
    if (this.newNote._id === undefined) {
    this.noteService.addNote(this.newNote).subscribe(
      () => this.router.navigate(["/"])
    )
    } else {
      this.noteService.updateNote(this.newNote._id, this.newNote).subscribe(
        () => this.router.navigate([`/note/${this.newNote._id}`])
      )
    }
  }

}
