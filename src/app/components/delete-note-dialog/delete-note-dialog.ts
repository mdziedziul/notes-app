import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-note-dialog',
  templateUrl: './delete-note-dialog.html',
  styleUrls: ['./delete-note-dialog.scss']
})
export class DeleteNoteDialog implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
