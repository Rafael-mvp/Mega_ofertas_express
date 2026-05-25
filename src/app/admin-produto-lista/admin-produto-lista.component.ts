import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AdminProdutosService, AdminProduto } from '../admin-produtos.service';
import { AdminProdutoExcluirComponent } from '../admin-produto-excluir/admin-produto-excluir.component';

@Component({
  selector: 'app-admin-produto-lista',
  imports: [CurrencyPipe, NgFor, NgIf, AdminProdutoExcluirComponent],
  templateUrl: './admin-produto-lista.component.html',
  styleUrl: './admin-produto-lista.component.css'
})
export class AdminProdutoListaComponent implements OnInit, OnDestroy {
  produtos: AdminProduto[] = [];
  produtoParaExcluir: AdminProduto | null = null;

  private sub!: Subscription;

  constructor(
    private service: AdminProdutosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.service.produtos$.subscribe(p => this.produtos = p);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  editarProduto(id: number): void {
    this.router.navigate(['/admin/editar', id]);
  }

  abrirExcluir(produto: AdminProduto): void {
    this.produtoParaExcluir = produto;
  }

  onConfirmarExclusao(): void {
    if (this.produtoParaExcluir) {
      this.service.excluirProduto(this.produtoParaExcluir.id);
      this.produtoParaExcluir = null;
      // BehaviorSubject atualiza this.produtos automaticamente via assinatura
    }
  }

  onCancelarExclusao(): void {
    this.produtoParaExcluir = null;
  }
}
