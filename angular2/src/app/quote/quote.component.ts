import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdDialogService } from '@covalent/core';

import { Quote } from './quote.model';
import { QuoteService } from './quote.service';
import { LoginService } from '../auth/login.service';
import { TabService } from '../tabs/tab.service';

@Component({
  templateUrl: './quote.component.html',
  styleUrls: [
    '../app.component.css'
  ]
})

export class QuoteComponent implements OnInit {

  quote: Quote;
  edit = false;
  name: string;
  author: string;
  book: string;

  constructor(
    private router: Router,
    private quoteService: QuoteService,
    private _dialogService: TdDialogService,
    private activatedRoute: ActivatedRoute,
    public loginService: LoginService,
    private tabService: TabService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.quoteService.getQuote(id).subscribe((data: Quote) => {
        this.quote = {
          id: data['id'],
          quote: data['quote'],
          author: data['author'],
          book: data['book']
        };
        this.name = this.quote.quote;
        this.author = this.quote.author;
        this.book = this.quote.book;
      }, error => {
        if ((this.name === undefined) || (this.name === '') || (id === undefined)) {
          this.router.navigate(['/']);
          this._dialogService.openAlert({
            message: 'Lo sentimos, esta cita ya no está disponible',
            title: 'Error',
            closeButton: 'Cerrar',
            width: '500px',
            height: '175px'
          });
          this.tabService.removeTab('quote', this.quote.id);
        }
      });
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
            this.quoteService.removeQuote(this.quote).subscribe((_) => {
              this.router.navigate(['/']);
              this.tabService.removeTab('quote', this.quote.id);
            }, (error) => console.error(error));
        }
    });
  }


  editQuote() {
    this.edit = true;
  }

  save() {
    if ((this.name !== '') && (this.author !== '') && (this.book !== '')) {
      this.edit = false;
      this.quote.quote = this.name;
      this.quote.author =this.author;
      this.quote.book = this.book;
      this.quoteService.saveQuote(this.quote).subscribe(
          _ => {},
          (error: Error) => console.error('Error creating new theme: ' + error),
      );
    }
  }

}
