import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CarrinhoService } from './carrinho.service';
import { ToastComponent } from './toast/toast.component';
import { AuthService, Cliente } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  searchQuery = '';
  cartCount = 0;
  clienteLogado: Cliente | null = null;

  private subs = new Subscription();

  constructor(
    private carrinho: CarrinhoService,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.subs.add(
      this.carrinho.itens$.subscribe(itens => {
        this.cartCount = itens.reduce((acc, i) => acc + i.quantidade, 0);
      })
    );
    this.subs.add(
      this.auth.cliente$.subscribe(c => this.clienteLogado = c)
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
