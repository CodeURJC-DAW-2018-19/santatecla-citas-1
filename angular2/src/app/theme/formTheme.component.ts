import { ThemeService } from './theme.service';
import { Component, OnInit } from '@angular/core';
import { Theme } from './theme.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './formTheme.component.html',
  styleUrls: [
    '../app.component.css'
  ]
})

export class FormThemeComponent {

  newTheme: boolean;
  theme: Theme;

    constructor(
      private _router: Router,
      activatedRoute: ActivatedRoute,
      private service: ThemeService) {
        const id = activatedRoute.snapshot.params['id'];
        if (id) {
          this.service.getTheme(id)
          .subscribe((data: Theme) => this.theme = {
            id: data['id'],
            name: data['name'],
            quotes: data['quotes']
          }
        );
          this.newTheme = false;
        } else {
          this.theme = { name: '', quotes: []};
          this.newTheme = true;
        }
    }

    cancel() {
        window.history.back();
    }

    save() {
        this.service.saveTheme(this.theme).subscribe(
            _ => {},
            (error: Error) => console.error('Error creating new theme: ' + error),
        );
        window.history.back();
    }

}
