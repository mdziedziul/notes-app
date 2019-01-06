import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNoteDialog } from './delete-note-dialog';

describe('DeleteNoteDialog', () => {
  let component: DeleteNoteDialog;
  let fixture: ComponentFixture<DeleteNoteDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteNoteDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNoteDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
