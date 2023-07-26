export class Receita {
  id: number;
  descricao: string;
  valor: number;
  data: string;
  categoria: string;


  constructor(id: number, descricao: string, valor: number, data: string, categoria: string) {
    this.id = id;
    this.descricao = descricao;
    this.valor = valor;
    this.data = data;
    this.categoria = categoria;
  }
}
