import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService, Cliente } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  erroLogin = false;
  carregando = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  get email() { return this.form.get('email')!; }
  get senha() { return this.form.get('senha')!; }

  entrar(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.erroLogin = false;
    this.carregando = true;

    const { email, senha } = this.form.value;
    const url = `http://localhost:3000/clientes?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`;

    this.http.get<Cliente[]>(url).subscribe({
      next: (clientes) => {
        this.carregando = false;
        if (clientes.length > 0) {
          this.auth.login(clientes[0]);
          this.router.navigate(['/']);
        } else {
          this.erroLogin = true;
        }
      },
      error: () => {
        this.carregando = false;
        this.erroLogin = true;
      },
    });
  }
}
