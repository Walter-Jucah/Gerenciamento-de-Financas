import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receita } from '../models/receita';
import { ReceitaService } from '../services/receita.service';

@Component({
  selector: 'app-lista-receitas',
  templateUrl: './lista-receitas.component.html',
  styleUrls: ['./lista-receitas.component.css']
})
export class ListaReceitasComponent implements OnInit {
  receitas: Receita[] = [];

  constructor(private receitaService: ReceitaService, private router: Router) {}

  ngOnInit() {
    this.carregarReceitas();
  }

  carregarReceitas() {
    this.receitaService.getReceitas().subscribe(
      (receitas) => {
        this.receitas = receitas;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  verDetalhes(id: number) {
    this.router.navigate(['/detalhes', id]);
  }

  editarReceita(id: number) {
    this.router.navigate(['/editar', id]);
  }

  excluirReceita(id: number) {
    if (confirm('Deseja realmente excluir esta receita?')) {
      this.receitaService.excluirReceita(id).subscribe(
        () => {
          // Atualiza a lista de receitas após a exclusão
          this.carregarReceitas();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
