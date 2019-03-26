import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Theme } from './theme.model';
import { ThemeService } from './theme.service';
import { LoginService } from '../auth/login.service';

@Component({
  templateUrl: './theme.component.html',
  styleUrls: [
    '../app.component.css'
  ]
})

export class ThemeComponent {

  theme: Theme;
  image: any;

  constructor(private themeService: ThemeService, private router: Router, activatedRoute: ActivatedRoute,
              private loginService: LoginService) {

    let id = activatedRoute.snapshot.params['id'];
    this.themeService.getTheme(id)
      .subscribe((data: Theme) => this.theme = {
        id: data['id'],
        name: data['name'],
        quotes: data['quotes']
      }
    );

    this.themeService.getImage(id)
      .subscribe(data => {
        this.createImageFromBlob(data);
      }, error => {
        console.log(error);
      });

  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.image = reader.result;
    }, false);

    if (image) {
       reader.readAsDataURL(image);
    }
 }

}
