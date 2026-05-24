import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CarrinhoService, ItemCarrinho } from '../carrinho.service';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  form: FormGroup;
  itens: ItemCarrinho[] = [];
  totalPreco = 0;
  totalItens = 0;
  pagamentoAtivo = 'pix';

  constructor(
    private fb: FormBuilder,
    private carrinho: CarrinhoService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nome:         ['', [Validators.required, Validators.minLength(3)]],
      cpf:          ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      email:        ['', [Validators.required, Validators.email]],
      rua:          ['', Validators.required],
      numero:       ['', Validators.required],
      bairro:       ['', Validators.required],
      cidade:       ['', Validators.required],
      cep:          ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      pagamento:    ['pix'],
      numeroCartao: [''],
      nomeCartao:   [''],
      validade:     [''],
      cvv:          [''],
    });
  }

  ngOnInit() {
    this.itens = this.carrinho.itens;
    this.totalPreco = this.carrinho.totalPreco;
    this.totalItens = this.carrinho.totalItens;

    if (this.itens.length === 0) {
      this.router.navigate(['/carrinho']);
    }
  }

  selecionarPagamento(tipo: string): void {
    this.pagamentoAtivo = tipo;
    this.form.patchValue({ pagamento: tipo });

    const camposCartao = ['numeroCartao', 'nomeCartao', 'validade', 'cvv'];
    camposCartao.forEach(campo => {
      const ctrl = this.form.get(campo)!;
      if (tipo === 'cartao') {
        ctrl.setValidators(Validators.required);
      } else {
        ctrl.clearValidators();
        ctrl.setValue('');
      }
      ctrl.updateValueAndValidity({ emitEvent: false });
    });
  }

  ctrl(nome: string) {
    return this.form.get(nome)!;
  }

  confirmar(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.router.navigate(['/confirmacao']);
  }
}
