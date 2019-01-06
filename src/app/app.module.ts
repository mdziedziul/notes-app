import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { AppRoutingModule } from './app-routing.module';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TranslatePipe } from './translate/translate.pipe';
import { TranslateService } from './translate/translate.service';
import { DeleteNoteDialog } from './components/delete-note-dialog/delete-note-dialog';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('cz');
}

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteDetailComponent,
    AddNoteComponent,
    PageHeaderComponent,
    TranslatePipe,
    DeleteNoteDialog
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    DeleteNoteDialog
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
