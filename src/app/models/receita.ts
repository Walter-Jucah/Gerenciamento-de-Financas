import { Categoria } from './categoria';

export interface Receita {
  id: number;
  data: Date;
  descricao: string;
  valor: number;
  categoria: Categoria; // Incluímos a propriedade categoria com o tipo Categoria
}
