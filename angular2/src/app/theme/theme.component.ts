import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Theme } from './theme.model';
import { ThemeService } from './theme.service';

@Component({
  templateUrl: './theme.component.html',
  styleUrls: [
    '../app.component.css'
  ]
})

export class ThemeComponent {

  theme: Theme;

  constructor(private themeService: ThemeService, private router: Router, activatedRoute: ActivatedRoute) {

    let id = activatedRoute.snapshot.params['id'];
    this.themeService.getTheme(id)
      .subscribe((data: Theme) => this.theme = {
        id: data['id'],
        name: data['name'],
        quotes: data['quotes']
      }
    );

  }

}
