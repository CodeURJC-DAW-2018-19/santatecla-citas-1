import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { Theme } from './theme.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent implements OnInit {

  private title = 'My First Angular App';

  private themes: Theme[] = [];

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.getThemes()
      .subscribe((data: Theme[]) => this.themes = data['content']
    );
    //this.themes = [{name: 'Libertad'}, {name: 'Amor'}];
  }

}
