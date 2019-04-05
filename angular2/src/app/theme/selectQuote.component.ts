import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from './theme.service';
import { QuoteService } from './../quote/quote.service';
import { Quote } from './../quote/quote.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './selectQuote.component.html',
  styleUrls: [
    '../app.component.css'
  ]
})

export class SelectQuoteComponent implements OnInit {

  quotes: Quote[];
  id: number;
  searchName = '';

  pageSize: number;
  pageQuotes: number;

  quotesSize: number;

  remainingQuotes: number;
  loadMoreQuotes: boolean;

  spinner = false;

  constructor(private quoteService: QuoteService, private themeService: ThemeService, activatedRoute: ActivatedRoute,
              private router: Router) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.resetPages();
    this.quoteService.getQuotes()
      .subscribe((data: Quote[]) => this.quotes = data['content']
    );
    this.getQuotesSize();
    this.pageSize = 6;
    this.loadMoreQuotes = true;
  }

  cancel() {
    window.history.back();
  }

  add(idQ: number) {
    this.themeService.addQuote(this.id, idQ).subscribe(
      (_) => this.router.navigate(['theme/', this.id]),
      (error) => console.log(error)
    );
  }

  search(name: string) {
    this.resetPages();
    if (name !== '') {
      this.quoteService.searchQuote(name, this.pageQuotes).subscribe((data: Quote[]) =>
        this.quotes = data['content']
    );
    } else {
      this.quoteService.getQuotes().subscribe((data: Quote[]) => this.quotes = data['content']
    );
    }
  }

  resetPages() {
    this.pageQuotes = 0;
  }

  loadLessQuotes() {
    this.pageQuotes = 0;
    this.loadMoreQuotes = true;
    this.showFirstQuotes();
    this.getRemainingQuotes();
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

  showFirstQuotes() {
    this.quoteService.getQuotes()
      .subscribe((data: Quote[]) => this.quotes = data['content']
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

}
