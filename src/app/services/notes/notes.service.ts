import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Note } from 'src/app/models/notes.model';

const GET_NOTES = '/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) {}

  public getNotes() {
    return this.http.get<Note[]>(environment.notesApi + GET_NOTES);
  }

  public getNoteById(id: any) {
    return this.http.get<Note>(environment.notesApi + GET_NOTES + "/" + id);
  }

  public addNote(note: any) {
    return this.http.post(environment.notesApi + GET_NOTES, note);
  }

  public deleteNote(id: any) {
    return this.http.delete(environment.notesApi + GET_NOTES + "/" + id);
  }

  public updateNote(id: any, note) {
    return this.http.put(environment.notesApi + GET_NOTES + "/" + id, note);
  }
}
