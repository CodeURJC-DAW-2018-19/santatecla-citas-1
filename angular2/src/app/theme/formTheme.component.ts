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

export class FormThemeComponent implements OnInit{

  newTheme: boolean;
  theme: Theme;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: ThemeService) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.service.getTheme(id)
      .subscribe((data: Theme) => this.theme = {
        id: data['id'],
        name: data['name'],
        quotes: data['quotes'],
        texts: data['texts']
      }
    );
      this.newTheme = false;
    } else {
      this.theme = { name: '', quotes: [], texts: []};
      this.newTheme = true;
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.saveTheme(this.theme).subscribe(
      _ => { this.router.navigate(['/']); },
      (error: Error) => console.error('Error creating new theme: ' + error),
    );
  }

}
