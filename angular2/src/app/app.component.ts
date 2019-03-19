import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { Theme } from './theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'My First Angular App';

  theme: Theme;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.getTheme(16)
      .subscribe((data: Theme) => this.theme = {
        name: data['name']
      });
  }

}
