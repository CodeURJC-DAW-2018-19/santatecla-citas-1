import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { Theme } from './theme.model';
import { ThemeService } from './theme.service';
import { LoginService } from '../auth/login.service';
import { TdDialogService } from '@covalent/core';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  templateUrl: './theme.component.html',
  styleUrls: [
    '../app.component.css'
  ]
})

export class ThemeComponent implements OnInit {

  theme: Theme;

  image: any;
  newImage: ImageSnippet;

  id: number;
  selectQuote = false;
  edit = false;
  name: string;

  labelPosition: string;

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private _dialogService: TdDialogService,) {

    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.themeService.getTheme(this.id)
        .subscribe((data: Theme) => {
          this.theme = {
            id: data['id'],
            name: data['name'],
            quotes: data['quotes'],
            texts: data['texts']
          };
          this.name = this.theme.name;
        }
      );

      this.themeService.getImage(this.id)
        .subscribe(data => {
          this.createImageFromBlob(data);
        }, error => {
          console.log(error);
        }
      );
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

  getPDF(){
    this.themeService.getPDF(this.id).subscribe(
      (response) => {
        var mediaType = 'application/pdf';
        var blob = new Blob([response], {type: mediaType});
        saveAs(blob, 'theme.pdf');
      })
  }

  removeTheme() {
    this._dialogService.openConfirm({
        message: '¿Seguro que desea eliminar el tema ' + this.theme.name + '?',
        title: 'Confirmación',
        cancelButton: 'Cancelar',
        acceptButton: 'Borrar',
        width: '500px',
        height: '175px'
    }).afterClosed().subscribe((accept: boolean) => {
        if (accept) {
            this.themeService
                .removeTheme(this.theme)
                .subscribe((_) => this.router.navigate(['/']), (error) => console.error(error));
        }
    });
  }

  editTheme() {
    this.edit = true;
  }

  add() {
    if (this.labelPosition === "cita") {
      this.router.navigate(['/theme/selectQuote', this.theme.id]);
    } else if (this.labelPosition === "texto") {
      this.router.navigate(['/theme/formText', this.theme.id]);
    }
  }

  deleteText(id: number) {
    this._dialogService.openConfirm({
      message: '¿Seguro que desea eliminar el texto de este tema?',
      title: 'Confirmación',
      cancelButton: 'Cancelar',
      acceptButton: 'Borrar',
      width: '500px',
      height: '200'
    }).afterClosed().subscribe((accept: boolean) => {
        if (accept) {
          this.themeService.removeText(this.theme, id).subscribe(
            (_) => this.ngOnInit(),
            (error) => console.log(error));
        }
    });
  }

  deleteQuote(idQ: number) {
    this._dialogService.openConfirm({
      message: '¿Seguro que desea eliminar la referencia de esta cita en este tema?',
      title: 'Confirmación',
      cancelButton: 'Cancelar',
      acceptButton: 'Borrar',
      width: '500px',
      height: '200'
    }).afterClosed().subscribe((accept: boolean) => {
        if (accept) {
          this.themeService.removeQuote(this.theme, idQ).subscribe(
            (_) => this.ngOnInit(),
            (error) => console.log(error));
        }
    });
  }

  changeImage(imageInput: any) {
    this._dialogService.openConfirm({
      message: '¿Seguro que desea cambiar la imagen de este tema?',
      title: 'Confirmación',
      cancelButton: 'Cancelar',
      acceptButton: 'Aceptar',
      width: '500px',
      height: '200'
    }).afterClosed().subscribe((accept: boolean) => {
        if (accept) {
          const file: File = imageInput.files[0];
          const reader = new FileReader();
          reader.addEventListener('load', (event: any) => {
            this.newImage = new ImageSnippet(event.target.result, file);
            this.themeService.uploadImage(this.theme.id, this.newImage.file).subscribe(
              _ => {
                this.ngOnInit();
              },
              (error: Error) => console.error('Error creating new image: ' + error),
            );
          });
          reader.readAsDataURL(file);
        }
    });
  }

  save() {
    if (this.name !== '') {
      this.edit = false;
      this.theme.name = this.name;
      this.themeService.saveTheme(this.theme).subscribe(
          _ => {},
          (error: Error) => console.error('Error creating new theme: ' + error),
      );
    }
  }

}
