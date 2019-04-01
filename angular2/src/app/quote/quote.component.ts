import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdDialogService } from '@covalent/core';

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

  constructor(
    private router: Router,
    private themeService: QuoteService,
    private _dialogService: TdDialogService,
    private activatedRoute: ActivatedRoute) {}

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

  removeTheme() {
    this._dialogService.openConfirm({
        message: '¿ Seguro que desea eliminar la cita ' + this.quote.id + '?',
        title: 'Confirmación',
        width: '500px',
        height: '175px'
    }).afterClosed().subscribe((accept: boolean) => {
        if (accept) {
            this.themeService
                .removeQuote(this.quote)
                .subscribe((_) => this.router.navigate(['/']), (error) => console.error(error));
        }
    });
  }

  editQuote() {
    this.router.navigate(['/quote/edit', this.quote.id]);
  }

}
