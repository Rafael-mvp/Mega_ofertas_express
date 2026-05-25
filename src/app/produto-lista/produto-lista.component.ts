import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProdutoCardComponent } from '../produto-card/produto-card.component';
import { Produto } from '../produto.model';
import { AdminProdutosService } from '../admin-produtos.service';

@Component({
  selector: 'app-produto-lista',
  imports: [ProdutoCardComponent],
  templateUrl: './produto-lista.component.html',
  styleUrl: './produto-lista.component.css'
})
export class ProdutoListaComponent implements OnInit, OnDestroy {
  @Input() categoria = 'Todos';

  produtos: Produto[] = [];
  carregando = true;
  erro = false;

  private sub!: Subscription;

  constructor(private service: AdminProdutosService) {}

  ngOnInit(): void {
    this.sub = this.service.produtos$.subscribe(produtos => {
      this.produtos = produtos;
      this.carregando = false;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  get produtosFiltrados(): Produto[] {
    if (this.categoria === 'Todos') return this.produtos;
    return this.produtos.filter(p => p.categoria === this.categoria);
  }

  get tituloSecao(): string {
    return this.categoria === 'Todos' ? 'Ofertas em Destaque' : this.categoria;
  }
}
