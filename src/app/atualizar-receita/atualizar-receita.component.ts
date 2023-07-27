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
  receita: Receita | undefined;
  categorias: Categoria[] = [];

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private receitaService: ReceitaService
  ) {}

  ngOnInit() {
    this.carregarCategorias();
    this.carregarDetalhesReceita();
  }

  carregarCategorias() {
    this.receitaService.getCategorias().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  carregarDetalhesReceita() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.receitaService.getReceitaById(id).subscribe(
          (receita) => {
            this.receita = receita;
          },
          (error) => {
            console.error(error);
          }
      );
    }
  }

  atualizarReceita() {
    if (this.receita) {
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

  voltarParaDetalhes() {
    // Redirecionar de volta à página de detalhes da receita
    if (this.receita) {
      this.router.navigate(['/receitas/detalhes', this.receita.id]);
    }
  }
}
