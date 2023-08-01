import { Categoria } from './categoria';

export class Receita {
  constructor(
    public id: number,
    public data: Date,
    public descricao: string,
    public valor: number,
    public categoria: Categoria
  ) {}
}
