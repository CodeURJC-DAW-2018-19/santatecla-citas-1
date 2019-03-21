import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Quote } from './quote.model';
import { QuoteService } from './quote.service';

@Component({
  templateUrl: './quote.component.html',
  styleUrls: [
    '../app.component.css'
  ]
})

export class QuoteComponent {

  /* quote: Quote;

  constructor(private themeService: QuoteService, private router: Router, activatedRoute: ActivatedRoute) {

    let id = activatedRoute.snapshot.params['id'];
    this.themeService.getQuote(id)
      .subscribe((data: Quote[]) => this.quote = data['content']
    );

  }*/

}
