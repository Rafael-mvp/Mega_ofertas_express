import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

function senhasIguais(group: AbstractControl): ValidationErrors | null {
  const senha = group.get('senha')?.value;
  const confirmar = group.get('confirmarSenha')?.value;
  return senha && confirmar && senha !== confirmar ? { senhasDivergem: true } : null;
}

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  form: FormGroup;
  enviado = false;
  carregando = false;
  erroEmail = false;
  erroServidor = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = this.fb.group({
      nome:           ['', [Validators.required, Validators.minLength(3)]],
      email:          ['', [Validators.required, Validators.email]],
      senha:          ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required],
    }, { validators: senhasIguais });
  }

  get nome()           { return this.form.get('nome')!; }
  get email()          { return this.form.get('email')!; }
  get senha()          { return this.form.get('senha')!; }
  get confirmarSenha() { return this.form.get('confirmarSenha')!; }
  get senhasDivergem() { return this.form.errors?.['senhasDivergem'] && this.confirmarSenha.touched; }

  enviar(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.carregando = true;
    this.erroEmail = false;
    this.erroServidor = false;

    const { nome, email, senha } = this.form.value;
    const url = `http://localhost:3000/clientes?email=${encodeURIComponent(email)}`;

    this.http.get<any[]>(url).subscribe({
      next: (clientes) => {
        if (clientes.length > 0) {
          this.erroEmail = true;
          this.carregando = false;
          return;
        }

        this.http.post('http://localhost:3000/clientes', { nome, email, senha }).subscribe({
          next: () => {
            this.carregando = false;
            this.enviado = true;
            setTimeout(() => this.router.navigate(['/login']), 2500);
          },
          error: () => {
            this.carregando = false;
            this.erroServidor = true;
          },
        });
      },
      error: () => {
        this.carregando = false;
        this.erroServidor = true;
      },
    });
  }
}
