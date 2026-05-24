import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  {
    path: 'carrinho',
    loadComponent: () =>
      import('./carrinho/carrinho.component').then(m => m.CarrinhoComponent)
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./checkout/checkout.component').then(m => m.CheckoutComponent)
  },
  {
    path: 'confirmacao',
    loadComponent: () =>
      import('./confirmacao/confirmacao.component').then(m => m.ConfirmacaoComponent)
  },
  {
    path: 'ofertas',
    loadComponent: () =>
      import('./ofertas/ofertas.component').then(m => m.OfertasComponent)
  },
];
