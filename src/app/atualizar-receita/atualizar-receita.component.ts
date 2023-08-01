import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receita } from '../models/receita';
import { Categoria } from '../models/categoria';
import { ReceitaService } from '../services/receita.service';

@Component({
  selector: 'app-atualizar-receita',
  templateUrl: './atualizar-receita.component.html',
  styleUrls: ['./atualizar-receita.component.css']
})
export class AtualizarReceitaComponent implements OnInit {
  receita: Receita = new Receita(1, new Date(), 'Descrição', 100, new Categoria(1, 'Nome da Categoria'));
  categorias: Categoria[] = [];

  constructor(
    private receitaService: ReceitaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Obter o ID da receita da rota atual
    const id = +this.route.snapshot.paramMap.get('id')!;
    // Carregar a receita com o ID obtido
    this.carregarReceita(id);
    // Carregar as categorias disponíveis
    console.log('Carregando categorias...');
    this.carregarCategorias();
  }

  carregarReceita(id: number) {
    this.receitaService.getReceitaById(id).subscribe(
      (receita) => {
        this.receita = receita!;
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

  atualizarReceita() {
    if (this.receita) {
      this.receita.data = new Date(); // Update this line to set the correct Date object
      this.receitaService.atualizarReceita(this.receita).subscribe(
        (receita) => {
          console.log('Receita atualizada:', receita);
          // Redirecionar de volta à página de detalhes da receita após a atualização
          this.router.navigate(['/receitas/detalhes', receita.id]);
        },
        (error) => {
          console.error('Erro ao atualizar receita:', error);
        }
      );
    }
  }



}
