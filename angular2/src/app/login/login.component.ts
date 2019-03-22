import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginObject } from './login.object';
import { Session } from './session.model';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: [
    '../app.component.css'
  ]
})

export class LoginComponent {
  public loginForm: FormGroup;
  public submitted = false;
  public error: {message: string} = null;
  constructor(private formBuilder: FormBuilder,
              private authenticationService: LoginService,
              private storageService: StorageService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  public submitLogin() {
    this.submitted = true;
    this.error = null;
    if (this.loginForm.valid) {
      this.authenticationService.login(new LoginObject(this.loginForm.value)).subscribe(
        data => this.correctLogin(data),
        error => this.error = {message : 'Wrong credentials'}
      );
    }
  }
  private correctLogin(data){
    this.storageService.setCurrentSession(data);
    this.router.navigate(['']);
  }
}
