import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Produto } from './produto.model';

// Alias para manter compatibilidade com os componentes admin existentes
export type AdminProduto = Produto;

@Injectable({ providedIn: 'root' })
export class AdminProdutosService {
  private readonly apiUrl = 'http://localhost:3000/produtos';

  private produtosSubject = new BehaviorSubject<Produto[]>([]);
  readonly produtos$: Observable<Produto[]> = this.produtosSubject.asObservable();

  constructor(private http: HttpClient) {}

  carregarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl).pipe(
      tap(produtos => this.produtosSubject.next(produtos))
    );
  }

  getProdutos(): Produto[] {
    return this.produtosSubject.value;
  }

  getProdutoById(id: number): Produto | undefined {
    return this.produtosSubject.value.find(p => p.id === id);
  }

  atualizarProduto(patch: { id: number; nome: string; preco: number; categoria: string; estoque: number }): void {
    const lista = this.produtosSubject.value;
    const idx = lista.findIndex(p => p.id === patch.id);
    if (idx === -1) return;

    const atual = lista[idx];
    const precoPromo = patch.preco * (1 - atual.desconto / 100);
    const atualizado: Produto = {
      ...atual,
      nome:             patch.nome,
      categoria:        patch.categoria,
      estoque:          patch.estoque,
      preco:            patch.preco,
      precoOriginal:    patch.preco,
      precoPromocional: Math.round(precoPromo * 100) / 100,
      precoPix:         Math.round(precoPromo * 0.95 * 100) / 100,
    };

    const nova = [...lista];
    nova[idx] = atualizado;
    this.produtosSubject.next(nova);
  }

  excluirProduto(id: number): void {
    this.produtosSubject.next(this.produtosSubject.value.filter(p => p.id !== id));
  }
}
