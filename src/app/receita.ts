// receita.ts

import {Categoria} from "./models/categoria";

export class Receita {
  id: number;
  descricao: string;
  valor: number;
  data: Date;
  categoria: Categoria;

  constructor(id: number, descricao: string, valor: number, data: Date, categoria: Categoria) {
    this.id = id;
    this.descricao = descricao;
    this.valor = valor;
    this.data = data;
    this.categoria = categoria;
  }
}
