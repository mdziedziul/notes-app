import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteNoteDialog } from '../delete-note-dialog/delete-note-dialog';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: any;

  constructor(
    private noteService: NotesService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.loadNotes();
  }

  public loadNotes() {
    this.noteService.getNotes().subscribe((notes) => {
        this.notes = notes;
    })
  }

  public deleteNote(id) {
    const modalRef = this.modalService.open(DeleteNoteDialog);
    modalRef.result.then((result) => {
      if(result == 'yes') {
        this.noteService.deleteNote(id).subscribe(
          () => this.loadNotes()
        )
      }
    }, (reason) => {
      //do nothing
    });    
  }   

}
