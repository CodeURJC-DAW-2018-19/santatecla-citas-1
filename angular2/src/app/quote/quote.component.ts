import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Quote } from './quote.model';
import { QuoteService } from './quote.service';

@Component({
  templateUrl: './quote.component.html',
  styleUrls: [
    '../app.component.css'
  ]
})

export class QuoteComponent implements OnInit {

  quote: Quote;

  constructor(private themeService: QuoteService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.themeService.getQuote(id)
        .subscribe((data: Quote) => this.quote = {
          id: data['id'],
          quote: data['quote'],
          author: data['author'],
          book: data['book']
        }
      );
    });
  }

}
