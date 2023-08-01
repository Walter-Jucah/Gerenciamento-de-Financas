import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita } from '../models/receita';
import { Categoria } from '../models/categoria';
import { ReceitaService } from '../services/receita.service';

@Component({
  selector: 'app-detalhes-receita',
  templateUrl: './detalhes-receita.component.html',
  styleUrls: ['./detalhes-receita.component.css']
})
export class DetalhesReceitaComponent implements OnInit {
  receita: Receita | undefined;
  editing: boolean = false;
  categorias: Categoria[] = []; // Lista de categorias

  constructor(
    private receitaService: ReceitaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.carregarReceita(id);
    this.carregarCategorias(); // Carregar a lista de categorias no momento da inicialização
  }

  carregarReceita(id: number) {
    this.receitaService.getReceitaById(id).subscribe(
      (receita) => {
        this.receita = receita;
      },
      (error) => {
        console.error('Erro ao obter receita:', error);
      }
    );
  }

  carregarCategorias() {
    this.receitaService.getCategorias().subscribe(
      (categorias) => {
        this.categorias = categorias;
      },
      (error) => {
        console.error('Erro ao obter categorias:', error);
      }
    );
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  salvarEdicao() {
    if (this.receita) {
      this.receitaService.atualizarReceita(this.receita).subscribe(
        (receita) => {
          console.log('Receita atualizada:', receita);
          this.editing = false; // Desabilitar o modo de edição após salvar
        },
        (error) => {
          console.error('Erro ao atualizar receita:', error);
        }
      );
    }
  }
}
