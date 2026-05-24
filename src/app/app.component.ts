import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CarrinhoService } from './carrinho.service';
import { ToastComponent } from './toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  searchQuery = '';
  cartCount = 0;
  private sub!: Subscription;

  constructor(private carrinho: CarrinhoService) {}

  ngOnInit() {
    this.sub = this.carrinho.itens$.subscribe(itens => {
      this.cartCount = itens.reduce((acc, i) => acc + i.quantidade, 0);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
