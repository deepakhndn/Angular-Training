import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    loginForm: FormGroup;
    loginFormSubmitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required]],
          password: ['', [Validators.required]]
      });
  }

  onSubmit() {
      console.log("After login");
      console.log('email : ' + this.loginForm.controls.email.value );
      console.log('password : ' + this.loginForm.controls.password.value );

      
  }


}
