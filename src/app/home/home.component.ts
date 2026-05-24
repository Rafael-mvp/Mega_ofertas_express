import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CategoriaMenuComponent } from '../categoria-menu/categoria-menu.component';
import { ProdutoListaComponent } from '../produto-lista/produto-lista.component';
import { AvaliacaoComponent } from '../avaliacao/avaliacao.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, CategoriaMenuComponent, ProdutoListaComponent, AvaliacaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categoriaSelecionada = 'Todos';

  onCategoriaMudou(categoria: string): void {
    this.categoriaSelecionada = categoria;
  }
}
