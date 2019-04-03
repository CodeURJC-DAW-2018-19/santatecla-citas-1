import { ThemeService, Text } from './theme.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './formText.component.html',
  styleUrls: [
    '../app.component.css'
  ]
})

export class FormTextComponent {

  newTheme: boolean;
  text: Text;

  id: number;

    constructor(
      private router: Router,
      activatedRoute: ActivatedRoute,
      private service: ThemeService) {

        this.id = activatedRoute.snapshot.params['id'];
        this.text = { text: '' };
        this.newTheme = true;

      }

    cancel() {
        window.history.back();
    }

    save() {
        this.service.addText(this.id, this.text).subscribe(
          (_) => this.router.navigate(['theme/', this.id]),
          (error) => console.log(error)
        );
    }

}
