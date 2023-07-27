import { Categoria } from './categoria';

export class Receita {
  id: number;
  data: Date;
  descricao: string;
  valor: number;
  categoria: Categoria;

  constructor() {
    this.id = 0;
    this.data = new Date();
    this.descricao = '';
    this.valor = 0;
    this.categoria = new Categoria(1, 'Categoria Padrão');
  }
}
