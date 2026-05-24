import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Produto } from './produto.model';

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  private readonly STORAGE_KEY = 'mega_carrinho';
  private itensSubject = new BehaviorSubject<ItemCarrinho[]>([]);

  itens$ = this.itensSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const salvo = localStorage.getItem(this.STORAGE_KEY);
      if (salvo) {
        try {
          this.itensSubject.next(JSON.parse(salvo));
        } catch {
          // dado corrompido — ignora
        }
      }
    }
  }

  get itens(): ItemCarrinho[] {
    return this.itensSubject.value;
  }

  get totalItens(): number {
    return this.itens.reduce((acc, i) => acc + i.quantidade, 0);
  }

  get totalPreco(): number {
    return this.itens.reduce(
      (acc, i) => acc + i.produto.precoPromocional * i.quantidade,
      0
    );
  }

  adicionar(produto: Produto): void {
    const itens = [...this.itens];
    const idx = itens.findIndex(i => i.produto.id === produto.id);
    if (idx >= 0) {
      itens[idx] = { ...itens[idx], quantidade: itens[idx].quantidade + 1 };
    } else {
      itens.push({ produto, quantidade: 1 });
    }
    this.salvar(itens);
  }

  remover(produtoId: number): void {
    this.salvar(this.itens.filter(i => i.produto.id !== produtoId));
  }

  alterarQuantidade(produtoId: number, delta: number): void {
    const itens = this.itens.map(i =>
      i.produto.id === produtoId
        ? { ...i, quantidade: Math.max(1, i.quantidade + delta) }
        : i
    );
    this.salvar(itens);
  }

  limpar(): void {
    this.salvar([]);
  }

  private salvar(itens: ItemCarrinho[]): void {
    this.itensSubject.next(itens);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(itens));
    }
  }
}
