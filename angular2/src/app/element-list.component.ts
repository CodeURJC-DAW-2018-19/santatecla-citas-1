import { StorageService } from './login/storage.service';
import { Component, OnInit } from '@angular/core';

import { Theme } from './theme/theme.model';
import { ThemeService } from './theme/theme.service';

import { Quote } from './quote/quote.model';
import { QuoteService } from './quote/quote.service';

@Component({
  templateUrl: './element-list.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class ElementListComponent implements OnInit {

  themes: Theme[];
  quotes: Quote[];
  logged = this.userStorage.isAuthenticated();

  constructor(private themeService: ThemeService, private quoteService: QuoteService, private userStorage: StorageService) {}

  ngOnInit() {
    this.themeService.getThemes()
      .subscribe((data: Theme[]) => this.themes = data['content']
    );
    this.quoteService.getQuotes()
      .subscribe((data: Quote[]) => this.quotes = data['content']
    );
  }

}
