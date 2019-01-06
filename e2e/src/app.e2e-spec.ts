import { AppPage } from './app.po';
import { element, by, browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Welcome to notes!');
  // });

  // it('should return number of the notes', () => {
  //   page.navigateTo();
  //   let count = page.countNotes();
  //   expect(count).toEqual(7);
  // });

  it('should create new note', () => {
    page.navigateTo();
    let count;
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
});
