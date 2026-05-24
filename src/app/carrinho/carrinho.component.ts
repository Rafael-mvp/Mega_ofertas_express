import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { CarrinhoService, ItemCarrinho } from '../carrinho.service';

@Component({
  selector: 'app-carrinho',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit, OnDestroy {
  itens: ItemCarrinho[] = [];
  totalPreco = 0;
  totalItens = 0;
  private sub!: Subscription;

  constructor(private carrinho: CarrinhoService) {}

  ngOnInit() {
    this.sub = this.carrinho.itens$.subscribe(itens => {
      this.itens = itens;
      this.totalItens = itens.reduce((acc, i) => acc + i.quantidade, 0);
      this.totalPreco = itens.reduce(
        (acc, i) => acc + i.produto.precoPromocional * i.quantidade,
        0
      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  diminuir(id: number): void {
    this.carrinho.alterarQuantidade(id, -1);
  }

  aumentar(id: number): void {
    this.carrinho.alterarQuantidade(id, +1);
  }

  remover(id: number): void {
    this.carrinho.remover(id);
  }
}
