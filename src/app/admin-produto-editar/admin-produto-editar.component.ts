import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminProdutosService, AdminProduto } from '../admin-produtos.service';

@Component({
  selector: 'app-admin-produto-editar',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './admin-produto-editar.component.html',
  styleUrl: './admin-produto-editar.component.css'
})
export class AdminProdutoEditarComponent implements OnInit {
  form: FormGroup;
  produto: AdminProduto | undefined;
  salvo = false;
  produtoNaoEncontrado = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: AdminProdutosService
  ) {
    this.form = this.fb.group({
      nome:      ['', [Validators.required, Validators.minLength(3)]],
      preco:     [null, [Validators.required, Validators.min(0.01)]],
      categoria: ['', Validators.required],
      estoque:   [null, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.service.getProdutoById(id);

    if (!this.produto) {
      this.produtoNaoEncontrado = true;
      return;
    }

    this.form.patchValue({
      nome:      this.produto.nome,
      preco:     this.produto.preco,
      categoria: this.produto.categoria,
      estoque:   this.produto.estoque,
    });
  }

  ctrl(nome: string) {
    return this.form.get(nome)!;
  }

  salvar(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid || !this.produto) return;

    this.service.atualizarProduto({
      id:        this.produto.id,
      nome:      this.form.value.nome,
      preco:     Number(this.form.value.preco),
      categoria: this.form.value.categoria,
      estoque:   Number(this.form.value.estoque),
    });

    this.salvo = true;
    setTimeout(() => this.router.navigate(['/admin']), 800);
  }

  cancelar(): void {
    this.router.navigate(['/admin']);
  }
}
