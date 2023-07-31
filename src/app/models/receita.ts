import { Categoria } from './categoria';

export class Receita {
  id: number;
  data: Date;
  descricao: string;
  valor: number;
  categoria: Categoria; // Corrigir para o tipo "Categoria"

  constructor(id: number, data: Date, descricao: string, valor: number, categoria: Categoria) {
    this.id = id;
    this.data = data;
    this.descricao = descricao;
    this.valor = valor;
    this.categoria = categoria;
  }
}
