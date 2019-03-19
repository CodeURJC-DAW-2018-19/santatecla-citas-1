import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { Observable } from 'rxjs';

interface Theme {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'My First Angular App';

  themes: Observable<Theme[]>;

  constructor(private themeService: ThemeService) {}


  ngOnInit() {

  }

}
