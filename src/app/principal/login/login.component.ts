import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuilder : FormBuilder){ }

  registroForm = this.formBuilder.group({
  email: ['',Validators.required],
  password: ['', Validators.required],
});

  // Generar un metodo get para cada campo del formulario reactivo
  get email(){ return this.registroForm.get('email');}
  get password(){ return this.registroForm.get('password');}
  

}
