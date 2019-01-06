import { Component, OnInit } from '@angular/core';
import { PageHeaderSetts } from '../page-header/models/pageHeaderSetts';
import { Note } from 'src/app/models/notes.model';
import { NotesService } from 'src/app/services/notes/notes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteNoteDialog } from '../delete-note-dialog/delete-note-dialog';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
  
  note: Note;
  id: any;
  notes: Note[];

  headerSetts: PageHeaderSetts = {
    backTitle: "backNote",
    backToRouter: ["/"]
  }

  constructor(
    private noteService: NotesService,
    private route: ActivatedRoute,
    private router : Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.loadNoteById(this.id);
    this.loadNotes();
  }

  public loadNotes() {
    this.noteService.getNotes().subscribe((notes) => {
        this.notes = notes;
    })
  }   

  public loadNoteById(id: any) {
    this.noteService.getNoteById(id).subscribe((note) => {
        this.note = note;
    })
  }

  public deleteNote(id) {
    const modalRef = this.modalService.open(DeleteNoteDialog);
    modalRef.result.then((result) => {
      if(result == 'yes') {
        this.noteService.deleteNote(id).subscribe(
          () => this.router.navigate(["/"])
        )
      }
    }, (reason) => {
      //do nothing
    });    
  }

  editNote() {
    this.router.navigate([`/edit-note/${this.id}`]);
  }

}
