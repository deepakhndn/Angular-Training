import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
    signupForm: FormGroup;
    signupFormSubmitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.signupForm = this.formBuilder.group({
          fullName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          role: ['', Validators.required]
      });
  }

  onSubmit() {
      this.signupFormSubmitted = true;
      console.log("After Signup");
      console.log('fullName : '+ this.signupForm.controls.fullName.value);
      console.log('email : '+ this.signupForm.controls.email.value);
      console.log('password : '+ this.signupForm.controls.password.value);
      console.log('role : '+ this.signupForm.controls.role.value);

      
  }

}
