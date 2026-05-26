import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BannerComponent } from '../banner/banner.component';
import { AvaliacaoComponent } from '../avaliacao/avaliacao.component';
import { ProdutoCardComponent } from '../produto-card/produto-card.component';
import { Produto } from '../produto.model';
import { AdminProdutosService } from '../admin-produtos.service';

interface Categoria {
  nome: string;
  icone: string;
}

@Component({
  selector: 'app-home',
  imports: [BannerComponent, AvaliacaoComponent, ProdutoCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  categoriaSelecionada = 'Todos';

  categorias: Categoria[] = [
    { nome: 'Todos',        icone: '🏠' },
    { nome: 'Eletrônicos',  icone: '📱' },
    { nome: 'Informática',  icone: '💻' },
    { nome: 'Áudio',        icone: '🎧' },
    { nome: 'Games',        icone: '🎮' },
    { nome: 'TV & Vídeo',   icone: '📺' },
    { nome: 'Câmeras',      icone: '📷' },
    { nome: 'Smartwatches', icone: '⌚' },
    { nome: 'Tablets',      icone: '📟' },
    { nome: 'Acessórios',   icone: '🔌' },
  ];

  produtos: Produto[] = [];
  carregando = true;
  erro = false;

  private sub!: Subscription;

  constructor(private service: AdminProdutosService) {}

  ngOnInit(): void {
    this.sub = this.service.carregarProdutos().subscribe({
      next: produtos => {
        this.produtos = produtos;
        this.carregando = false;
      },
      error: () => {
        this.carregando = false;
        this.erro = true;
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  get produtosFiltrados(): Produto[] {
    if (this.categoriaSelecionada === 'Todos') return this.produtos;
    return this.produtos.filter(p => p.categoria === this.categoriaSelecionada);
  }

  get tituloSecao(): string {
    return this.categoriaSelecionada === 'Todos' ? 'Ofertas em Destaque' : this.categoriaSelecionada;
  }

  selecionarCategoria(categoria: string): void {
    this.categoriaSelecionada = categoria;
  }
}
