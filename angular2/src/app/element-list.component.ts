import { LoginService } from './auth/login.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Theme } from './theme/theme.model';
import { ThemeService } from './theme/theme.service';

import { Quote } from './quote/quote.model';
import { QuoteService } from './quote/quote.service';

import { TabService } from './tabs/tab.service';
import { TouchSequence } from 'selenium-webdriver';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  templateUrl: './element-list.component.html',
  providers: [ThemeService, HttpClient, Router],
  styleUrls: [
    './app.component.css'
  ]
})

export class ElementListComponent implements OnInit {

  themes: Theme[];
  quotes: Quote[];

  restThemes: number;
  restQuotes: string;

  searchName = '';
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
    public loginService: LoginService,
    public tabService: TabService) {}

  ngOnInit() {
    this.resetPages();
    this.showFirstThemesAndQuotes();

    // Pages size and matBadge init
    this.getQuotesSize();
    this.getThemesSize();
    this.pageSize = 6;
    this.loadMoreQuotes = true;
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
    this.getRemainingThemes();
  }

  search(name: string) {
    this.resetPages();
    this.searchName = name;
    if (name !== '') {
      this.themeService.searchTheme(name, this.pageQuotes).subscribe((data: Theme[]) => {
        this.themes = data['content'];
      });
      this.quoteService.searchQuote(name, this.pageQuotes).subscribe((data: Quote[]) => {
        this.quotes = data['content'];
      });
    } else {
      this.showFirstThemesAndQuotes();
    }
  }

  showQuotesByPage(page: number) {
    this.spinner = true;
    if (page !== 0) {
      if ( this.searchName === '') {
          this.quoteService.getQuotesByPage(page).subscribe((data1: Quote[]) => {
            this.quotes = this.quotes.concat(data1['content']);
            this.spinner = false;
      });
      } else {
          this.quoteService.searchQuote(this.searchName, this.pageQuotes + 1).subscribe((data: Quote[]) => {
            this.quotes = this.quotes.concat(data['content']);
            this.spinner = false;
          });
      }
    } else {
      this.showFirstQuotes();
    }
    this.pageQuotes++;
    this.getRemainingQuotes();
  }

  showThemesByPage(page: number) {
    this.spinner = true;
    if (page !== 0) {
      if ( this.searchName === '') {
        this.themeService.getThemesByPage(page).subscribe((data: Theme[]) => {
          this.themes = this.themes.concat(data['content']);
          this.spinner = false;
        });
      } else {
        this.themeService.searchTheme(this.searchName, this.pageQuotes + 1).subscribe((data: Theme[]) => {
          this.themes = this.themes.concat(data['content']);
          this.spinner = false;
        });
      }
    } else {
      this.showFirstThemes();
    }
    this.pageThemes++;
    this.getRemainingThemes();
  }

  showFirstThemesAndQuotes() {
    this.themeService.getThemes().subscribe((data: Theme[]) => {
      this.themes = data['content'];
    });
    this.quoteService.getQuotes().subscribe((data: Quote[]) => {
      this.quotes = data['content'];
    });
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
    this.themeService.getSize().subscribe((data: number) => {
      this.themesSize = data;
      this.getRemainingThemes();
    });
  }

  getQuotesSize() {
    this.quoteService.getSize().subscribe((data: number) => {
      this.quotesSize = data;
      this.getRemainingQuotes();
    });
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

