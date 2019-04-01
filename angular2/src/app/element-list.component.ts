import { LoginService } from './auth/login.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Theme } from './theme/theme.model';
import { ThemeService } from './theme/theme.service';

import { Quote } from './quote/quote.model';
import { QuoteService } from './quote/quote.service';

import { TabService } from './tabs/tab.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  templateUrl: './element-list.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class ElementListComponent implements OnInit {

  themes: Theme[];
  quotes: Quote[];

  restThemes: number;
  restQuotes: string;

  searchName: string;
  pageSize: number;
  pageThemes: number;
  pageQuotes: number;

  themesSize: number;
  quotesSize: number;

  remainingQuotes: number;
  loadMoreQuotes: boolean;

  remainingThemes: number;
  loadMoreThemes: boolean;

  spinner = false;

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private quoteService: QuoteService,
    private loginService: LoginService,
    private tabService: TabService) {}

  ngOnInit() {
    this.resetPages();
    this.showAllThemesAndQuotes();

    // Pages size and matBadge init
    this.getQuotesSize();
    this.getThemesSize();
    this.pageSize = 6;
    this.loadMoreQuotes = true;
    //console.log(this.quotesSize);
    //console.log(this.pageSize)
  }

  resetPages() {
    this.pageThemes = 0;
    this.pageQuotes = 0;
  }

  loadLessQuotes() {
    this.pageQuotes = 0;
    this.loadMoreQuotes = true;
    this.showFirstQuotes();
    this.getRemainingQuotes();
  }

  loadLessThemes() {
    this.pageThemes = 0;
    this.loadMoreThemes = true;
    this.showFirstThemes();
    this.getRemainingQuotes();
  }

  search(name: string) {
    this.resetPages();
    if (name !== '') {
    this.themeService.searchTheme(name)
      .subscribe((data: Theme[]) => this.themes = data['content']
    );
    this.quoteService.searchQuote(name)
      .subscribe((data: Quote[]) => this.quotes = data['content']
    );
    } else {
      this.showAllThemesAndQuotes();
    }
  }

  showQuotesByPage(page: number) {
    if (page !== 0) {
    this.themeService.getThemes()
      .subscribe((data: Theme[]) => this.themes = data['content']
    );
    this.quoteService.getQuotesByPage(page)
      .subscribe((data: Quote[]) => this.quotes = data['content']
    );
    } else {
      this.showAllThemesAndQuotes();
    }
    this.pageQuotes++;
    this.getRemainingQuotes();
  }

  showThemesByPage(page: number) {
    this.spinner = true;
    if (page !== 0) {
    this.themeService.getThemesByPage(page)
      .subscribe((data: Theme[]) => this.themes = data['content']
    );
    this.quoteService.getQuotes()
      .subscribe((data: Quote[]) => this.quotes = data['content']
    );
    } else {
      this.showAllThemesAndQuotes();
    }
    this.pageThemes++;
    this.getRemainingThemes();
  }

  showAllThemesAndQuotes() {
    this.themeService.getThemes()
      .subscribe((data: Theme[]) => {
      this.themes = data['content'];}
    );
    this.quoteService.getQuotes()
      .subscribe((data: Quote[]) => this.quotes = data['content']
    );

    this.getRemainingQuotes();
    this.getRemainingThemes();
  }

  showFirstThemes() {
    this.themeService.getThemes()
      .subscribe((data: Theme[]) => { this.themes = data['content']; }
    );

    this.getRemainingQuotes();
  }

  showFirstQuotes() {
    this.quoteService.getQuotes()
      .subscribe((data: Quote[]) => this.quotes = data['content']
    );

    this.getRemainingThemes();
  }

  newTheme() {
    this.router.navigate(['/newTheme']);
  }

  newQuote() {
    this.router.navigate(['/newQuote']);
  }

  getThemesSize() {
    this.themeService.getSize()
      .subscribe((data: number) => {
        this.themesSize = data;
        this.getRemainingThemes();
      }
    );
  }

  getQuotesSize() {
    this.quoteService.getSize()
      .subscribe((data: number) => {
        this.quotesSize = data;
        this.getRemainingQuotes();
      }
    );
  }

  getRemainingQuotes() {
    const op = this.quotesSize - this.pageSize - (this.pageSize * this.pageQuotes);
    this.remainingQuotes = (op > 0) ?  op : 0;
    this.loadMoreQuotes = this.remainingQuotes !== 0;
  }

  getRemainingThemes() {
    const op = this.themesSize - this.pageSize - (this.pageSize * this.pageThemes);
    this.remainingThemes = (op > 0) ?  op : 0;
    this.loadMoreThemes = this.remainingThemes !== 0;
  }

}
