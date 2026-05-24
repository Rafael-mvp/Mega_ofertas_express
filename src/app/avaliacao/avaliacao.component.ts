import { Component } from '@angular/core';

interface Avaliacao {
  nome: string;
  nota: number;
  comentario: string;
  data: string;
}

@Component({
  selector: 'app-avaliacao',
  imports: [],
  templateUrl: './avaliacao.component.html',
  styleUrl: './avaliacao.component.css'
})
export class AvaliacaoComponent {
  avaliacoes: Avaliacao[] = [
    {
      nome: 'Carlos Silva',
      nota: 5,
      comentario: 'Produto chegou super rápido e em perfeitas condições! Qualidade incrível pelo preço. Recomendo demais!',
      data: '12/05/2025'
    },
    {
      nome: 'Ana Paula',
      nota: 4,
      comentario: 'Ótimo custo-benefício. O fone tem qualidade sonora excelente. Só tirei uma estrela pela demora na entrega.',
      data: '08/05/2025'
    },
    {
      nome: 'Roberto Mendes',
      nota: 5,
      comentario: 'Comprei o notebook e estou extremamente satisfeito. Rápido, bem embalado e original. Top!',
      data: '03/05/2025'
    },
    {
      nome: 'Fernanda Lima',
      nota: 5,
      comentario: 'Melhor loja online que já comprei! Produto original, preço justo e atendimento exemplar.',
      data: '28/04/2025'
    },
  ];

  estrelas(nota: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i);
  }
}
