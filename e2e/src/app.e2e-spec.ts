import { AppPage } from './app.po';
import { element, by, browser } from 'protractor';

describe('Notes App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should create new note', () => {
    page.navigateTo();
    let count: number;
    page.countNotes().then(function(value) {
      count = value;
    });
    let addButton = element(by.css('.btn-primary'));
    addButton.click();
    let noteName = element(by.id('name'));
    let noteBody = element(by.id('body'));
    noteName.sendKeys('My e2e test note');
    noteBody.sendKeys('This is a note from e2e test!');
    let saveButton = element(by.css('.btn-primary'));
    saveButton.click();
    browser.waitForAngular();
    expect(element.all(by.css('.note')).get(0).element(by.css('.note-name')).getText()).toBe('My e2e test note');
    expect(element.all(by.css('.note')).get(0).element(by.css('.note-body')).getText()).toBe('This is a note from e2e test!');
    page.countNotes().then(function(value) {
      let countAfterAdd = value;
      expect(countAfterAdd).toBeGreaterThan(count);
    });   
  });

  it('should delete note', () => {
    page.navigateTo();
    let count: number;
    page.countNotes().then(function(value) {
      count = value;
    });
    let firstNote = element.all(by.css('.note')).get(0);
    let firstNoteTitle = firstNote.element(by.css('.note-name')).getText();
    let firstNoteBody = firstNote.element(by.css('.note-body')).getText();
    let deleteButton = firstNote.element(by.css('.delete-btn'));
    deleteButton.click();
    browser.waitForAngular();
    let confirmButton = element(by.css('.modal-content')).element(by.css('.btn-primary'));
    confirmButton.click();
    browser.waitForAngular();
    let newFirstNote = element.all(by.css('.note')).get(0);
    expect(newFirstNote.element(by.css('.note-name')).getText()).not.toEqual(firstNoteTitle);
    expect(newFirstNote.element(by.css('.note-body')).getText()).not.toEqual(firstNoteBody);

    page.countNotes().then(function(value) {
      let countAfterAdd = value;
      expect(countAfterAdd).toBeLessThan(count);
    });   
  });
});
