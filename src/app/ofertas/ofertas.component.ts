import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { CategoriaMenuComponent } from '../categoria-menu/categoria-menu.component';
import { ProdutoCardComponent } from '../produto-card/produto-card.component';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-ofertas',
  imports: [CategoriaMenuComponent, ProdutoCardComponent, CurrencyPipe],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent implements OnInit {
  private todosEmPromocao: Produto[] = [];
  produtosFiltrados: Produto[] = [];
  categoria = 'Todos';
  carregando = true;
  erro = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Produto[]>('http://localhost:3000/produtos').subscribe({
      next: (dados) => {
        this.todosEmPromocao = dados.filter(p => p.emPromocao);
        this.aplicarFiltro();
        this.carregando = false;
      },
      error: () => {
        this.erro = true;
        this.carregando = false;
      }
    });
  }

  onCategoriaMudou(categoria: string): void {
    this.categoria = categoria;
    this.aplicarFiltro();
  }

  private aplicarFiltro(): void {
    if (this.categoria === 'Todos') {
      this.produtosFiltrados = this.todosEmPromocao;
    } else {
      this.produtosFiltrados = this.todosEmPromocao.filter(p => p.categoria === this.categoria);
    }
  }

  get tituloSecao(): string {
    return this.categoria === 'Todos' ? 'Todas as Ofertas' : this.categoria;
  }
}
