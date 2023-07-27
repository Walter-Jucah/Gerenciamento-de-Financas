import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita } from '../models/receita';
import { ReceitaService } from '../services/receita.service';

@Component({
  selector: 'app-detalhes-receita',
  templateUrl: './detalhes-receita.component.html',
  styleUrls: ['./detalhes-receita.component.css']
})
export class DetalhesReceitaComponent implements OnInit {
  receita?: Receita;

  constructor(
    private route: ActivatedRoute,
    private receitaService: ReceitaService
  ) {}

  ngOnInit() {
    this.carregarDetalhesReceita();
  }

  carregarDetalhesReceita() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.receitaService.getReceitaById(id).subscribe(
        (receita: Receita | undefined) => {
          if (receita !== undefined) {
            this.receita = receita;
          } else {
            console.error('Receita não encontrada.');
          }
        },
        (error) => {
          console.error(error);
          this.receita = undefined;
        }
      );
    }
  }
}
