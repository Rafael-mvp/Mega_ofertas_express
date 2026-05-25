import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import { AdminProduto } from '../admin-produtos.service';

@Component({
  selector: 'app-admin-produto-excluir',
  imports: [NgIf],
  templateUrl: './admin-produto-excluir.component.html',
  styleUrl: './admin-produto-excluir.component.css'
})
export class AdminProdutoExcluirComponent {
  @Input() produto: AdminProduto | null = null;
  @Output() confirmar = new EventEmitter<void>();
  @Output() cancelar  = new EventEmitter<void>();
}
