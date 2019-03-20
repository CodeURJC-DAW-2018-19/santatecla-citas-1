import { Component } from '@angular/core';

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

export class ElementListComponent {

  themes: Theme[];
  quotes: Quote[];

  constructor(private themeService: ThemeService, private quoteService: QuoteService) {}

  ngOnInit() {
    this.themeService.getThemes()
      .subscribe((data: Theme[]) => this.themes = data['content']
    );
    this.quoteService.getQuotes()
      .subscribe((data: Quote[]) => this.quotes = data['content']
    );
  }

}
