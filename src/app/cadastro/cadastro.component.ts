import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  form: FormGroup;
  enviado = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get nome() { return this.form.get('nome')!; }
  get email() { return this.form.get('email')!; }
  get senha() { return this.form.get('senha')!; }

  enviar() {
    if (this.form.valid) {
      this.enviado = true;
    } else {
      this.form.markAllAsTouched();
    }
  }
}
