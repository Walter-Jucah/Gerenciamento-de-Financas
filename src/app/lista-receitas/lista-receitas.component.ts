import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Receita } from '../models/receita';
import { ReceitaService } from '../services/receita.service';
import {ConfirmacaoDialogComponent} from "../confirmacao-dialog/confirmacao-dialog.component";

@Component({
  selector: 'app-lista-receitas',
  templateUrl: './lista-receitas.component.html',
  styleUrls: ['./lista-receitas.component.css']
})
export class ListaReceitasComponent implements OnInit {
  receitas: Receita[] = [];

  constructor(
    private receitaService: ReceitaService,
    private router: Router,
    private dialog: MatDialog
  ) {}

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
    this.router.navigate(['/receitas/detalhes', id]);
  }

  editarReceita(id: number) {
    this.router.navigate(['/receitas/editar', id]);
  }

  excluirReceita(id: number) {
    const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
      width: '300px',
      data: 'Deseja realmente excluir esta receita?', // Passa a mensagem de confirmação para o diálogo
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.receitaService.excluirReceita(id).subscribe(
          () => {
            this.carregarReceitas(); // Atualiza a lista de receitas após a exclusão
          },
          (error) => {
            console.error(error);
          }
        );
      }
    });
  }
}
