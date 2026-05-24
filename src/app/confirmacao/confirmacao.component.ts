import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CarrinhoService, ItemCarrinho } from '../carrinho.service';

@Component({
  selector: 'app-confirmacao',
  imports: [CurrencyPipe],
  templateUrl: './confirmacao.component.html',
  styleUrl: './confirmacao.component.css'
})
export class ConfirmacaoComponent implements OnInit {
  itensPedido: ItemCarrinho[] = [];
  totalPedido = 0;
  numeroPedido = 0;

  constructor(private carrinho: CarrinhoService, private router: Router) {}

  ngOnInit() {
    this.itensPedido = [...this.carrinho.itens];
    this.totalPedido = this.carrinho.totalPreco;

    if (this.itensPedido.length === 0) {
      this.router.navigate(['/']);
      return;
    }

    this.numeroPedido = Math.floor(Math.random() * 900_000) + 100_000;
    this.carrinho.limpar();
  }

  continuarComprando(): void {
    this.router.navigate(['/']);
  }
}
