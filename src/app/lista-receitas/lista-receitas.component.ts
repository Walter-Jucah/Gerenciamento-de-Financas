// Importações necessárias
import { Component, OnInit } from '@angular/core';
import { Receita } from '../models/receita';
import { ReceitaService } from '../services/receita.service';

@Component({
  selector: 'app-lista-receitas',
  templateUrl: './lista-receitas.component.html',
  styleUrls: ['./lista-receitas.component.css']
})
export class ListaReceitasComponent implements OnInit {

  receitas: Receita[] = [];

  // Construtor e injeção do serviço ReceitaService
  constructor(private receitaService: ReceitaService) { }

  // Método ngOnInit()
  ngOnInit(): void {
    this.carregarReceitas();
  }

  // Método privado para carregar as receitas do serviço
  private carregarReceitas(): void {
    this.receitaService.getReceitas().subscribe((receitas: Receita[]) => {
      this.receitas = receitas;
    });
  }
}
