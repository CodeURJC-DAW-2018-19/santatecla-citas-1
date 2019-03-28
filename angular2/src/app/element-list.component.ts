import { LoginService } from './auth/login.service';
import { Component, OnInit } from '@angular/core';

import { Theme } from './theme/theme.model';
import { ThemeService } from './theme/theme.service';

import { Quote } from './quote/quote.model';
import { QuoteService } from './quote/quote.service';

import { TabService } from './tabs/tab.service';

@Component({
  templateUrl: './element-list.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class ElementListComponent implements OnInit {

  themes: Theme[];
  quotes: Quote[];

  searchName: string;
  pageThemes: number;
  pageQuotes: number;

  constructor(private themeService: ThemeService, private quoteService: QuoteService,
              private loginService: LoginService, private tabService: TabService) {}

  ngOnInit() {
    this.resetPages();
    this.showAllThemesAndQuotes();
  }

  resetPages(){
    this.pageThemes = 0;
    this.pageQuotes = 0;
  }

  loadLess(){
    this.resetPages();
    this.showAllThemesAndQuotes();
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
    this.pageThemes = 0;
  }

  showThemesByPage(page: number) {
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
    this.pageQuotes = 0;
  }

  showAllThemesAndQuotes() {
    this.themeService.getThemes()
      .subscribe((data: Theme[]) => {
      this.themes = data['content'];}
    );
    this.quoteService.getQuotes()
      .subscribe((data: Quote[]) => this.quotes = data['content']
    );
  }

}
