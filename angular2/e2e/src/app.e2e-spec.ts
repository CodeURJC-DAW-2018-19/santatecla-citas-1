import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {

  beforeEach(() => {
    browser.get('http://localhost:4200/new');
  });

  it('should show 5 themes', () => {
    let themes = element.all(by.id('themes-list'));
    expect(themes.count()).toEqual(5);
  });

  it('should login succesfully', () => {
    element(by.id('log-in-button')).click();
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('pass');
    element(by.id('send-login-button')).click();
    expect(element(by.id('logged-name')).getText()).toEqual('admin');
  });

  it('should add a theme', () => {
    element(by.id('add-theme-button')).click();
    element(by.id('theme-name')).sendKeys('Libertad');
    element(by.id('save-theme-button')).click();
    let themes = element.all(by.id('themes-list'));
    expect(themes.count()).toEqual(6);
  });

});
