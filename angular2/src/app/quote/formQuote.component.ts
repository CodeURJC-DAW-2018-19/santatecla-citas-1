import { QuoteService } from './quote.service';
import { Component, OnInit } from '@angular/core';
import { Quote } from './quote.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './formQuote.component.html',
  styleUrls: [
    '../app.component.css'
  ]
})

export class FormQuoteComponent {

  newQuote: boolean;
  quote: Quote;

    constructor(
      private _router: Router,
      activatedRoute: ActivatedRoute,
      private service: QuoteService) {
        const id = activatedRoute.snapshot.params['id'];
        if (id) {
          this.service.getQuote(id)
          .subscribe((data: Quote) => this.quote = {
            id: data['id'],
            quote: data['quote'],
            author: data['author'],
            book: data['book']
          }
        );
          this.newQuote = false;
        } else {
          this.quote = { quote: '', author: '', book: ''};
          this.newQuote = true;
        }
    }

    cancel() {
        window.history.back();
    }

    save() {
        this.service.saveQuote(this.quote).subscribe(
            _ => {},
            (error: Error) => console.error('Error creating new theme: ' + error),
        );
        window.history.back();
    }

}

