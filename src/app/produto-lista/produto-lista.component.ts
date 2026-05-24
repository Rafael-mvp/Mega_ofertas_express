import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdutoCardComponent } from '../produto-card/produto-card.component';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto-lista',
  imports: [ProdutoCardComponent],
  templateUrl: './produto-lista.component.html',
  styleUrl: './produto-lista.component.css'
})
export class ProdutoListaComponent implements OnInit {
  @Input() categoria = 'Todos';

  produtos: Produto[] = [];
  carregando = true;
  erro = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Produto[]>('http://localhost:3000/produtos').subscribe({
      next: (dados) => {
        this.produtos = dados;
        this.carregando = false;
      },
      error: () => {
        this.erro = true;
        this.carregando = false;
      }
    });
  }

  get produtosFiltrados(): Produto[] {
    if (this.categoria === 'Todos') return this.produtos;
    return this.produtos.filter(p => p.categoria === this.categoria);
  }

  get tituloSecao(): string {
    return this.categoria === 'Todos' ? 'Ofertas em Destaque' : this.categoria;
  }
}
