import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Produto } from '../produto.model';
import { CarrinhoService } from '../carrinho.service';
import { ToastService } from '../toast.service';

export type { Produto };

@Component({
  selector: 'app-produto-card',
  imports: [CurrencyPipe],
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.css'
})
export class ProdutoCardComponent {
  @Input() produto!: Produto;

  constructor(
    private carrinho: CarrinhoService,
    private toast: ToastService
  ) {}

  comprar(): void {
    this.carrinho.adicionar(this.produto);
    this.toast.mostrar(`"${this.produto.nome}" adicionado ao carrinho!`);
  }
}
