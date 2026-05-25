export interface Produto {
  id: number;
  nome: string;
  categoria: string;
  precoOriginal: number;
  precoPromocional: number;
  precoPix: number;
  parcelas: number;
  desconto: number;
  destaque: boolean;
  emPromocao: boolean;
  imagem: string;
  // campos adicionados para unificação com o admin
  preco: number;
  estoque: number;
}
