import { Component, Output, EventEmitter } from '@angular/core';

interface Categoria {
  nome: string;
  icone: string;
}

@Component({
  selector: 'app-categoria-menu',
  imports: [],
  templateUrl: './categoria-menu.component.html',
  styleUrl: './categoria-menu.component.css'
})
export class CategoriaMenuComponent {
  @Output() categoriaChange = new EventEmitter<string>();

  ativa = 'Todos';

  categorias: Categoria[] = [
    { nome: 'Todos',       icone: '🏠' },
    { nome: 'Eletrônicos', icone: '📱' },
    { nome: 'Informática', icone: '💻' },
    { nome: 'Áudio',       icone: '🎧' },
    { nome: 'Games',       icone: '🎮' },
    { nome: 'TV & Vídeo',  icone: '📺' },
    { nome: 'Câmeras',     icone: '📷' },
    { nome: 'Smartwatches',icone: '⌚' },
    { nome: 'Tablets',     icone: '📟' },
    { nome: 'Acessórios',  icone: '🔌' },
  ];

  selecionar(nome: string): void {
    this.ativa = nome;
    this.categoriaChange.emit(nome);
  }
}
