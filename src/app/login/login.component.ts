import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService,
              public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.form = this.fb.group({
      id: [undefined, Validators.required],
      password: [undefined, Validators.required],
    });
  }

  login(): void {
    if (this.loginService.login(this.form.getRawValue())) {
      this.router.navigate(['/manage']);
    } else {
      this.snackBar.open('Invalid Login Info', 'OK', {
        duration: 2000,
      });
    }
  }
}
