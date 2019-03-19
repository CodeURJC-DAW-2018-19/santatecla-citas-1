import { Quote } from './quote.model';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { QuoteService } from './quote.service';
import { Theme } from './theme.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent implements OnInit {

  private title = 'My First Angular App';

  private themes: Theme[] = [];

  private quotes: Quote[] = [];

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
