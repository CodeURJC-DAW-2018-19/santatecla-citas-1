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

  constructor(private quoteService: QuoteService, private themeService: ThemeService, activatedRoute: ActivatedRoute,
              private router: Router) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.quoteService.getQuotes()
      .subscribe((data: Quote[]) => this.quotes = data['content']
    );
  }

  add(idQ: number) {
    this.themeService.addQuote(this.id, idQ).subscribe(
      (_) => this.router.navigate(['theme/', this.id]),
      (error) => console.log(error)
    );
  }
}
