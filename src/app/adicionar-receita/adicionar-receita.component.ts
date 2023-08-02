import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Receita } from '../models/receita';
import { Categoria } from '../models/categoria';
import { ReceitaService } from '../services/receita.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-receita',
  templateUrl: './adicionar-receita.component.html',
  styleUrls: ['./adicionar-receita.component.css']
})
export class AdicionarReceitaComponent implements OnInit {
  novaReceita: Receita = new Receita(0, new Date(), '', 0, new Categoria(0, '')); // Crie uma nova instância de Receita
  categorias: Categoria[] = [];

  constructor(
    private receitaService: ReceitaService,
    private router: Router,
    private snackBar: MatSnackBar // Injete o MatSnackBar
  ) {}

  ngOnInit() {
    // Carregar as categorias disponíveis ao inicializar o componente
    this.carregarCategorias();
  }

  // Crie um método para carregar as categorias disponíveis
  carregarCategorias() {
    this.receitaService.getCategorias().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  // Crie um método para adicionar uma nova receita
  adicionarReceita() {
    this.receitaService.adicionarReceita(this.novaReceita).subscribe({
      next: (receita) => {
        this.novaReceita = new Receita(0, new Date(), '', 0, new Categoria(0, '')); // Limpa os campos após a adição da receita
        console.log('Receita adicionada:', receita);

        // Exibe o SnackBar com a mensagem "Receita adicionada"
        this.snackBar.open('Receita adicionada', 'Fechar', {
          duration: 3000, // Duração em milissegundos
          verticalPosition: 'top', // Posição vertical (top ou bottom)
        });

        this.voltarParaLista(); // Após adicionar a receita, volte para a lista
      },
      error: (error) => {
        console.error('Erro ao adicionar receita:', error);
      },
      complete: () => {
        console.log('Adição da receita concluída.');
      }
    });
  }

  // Crie um método para navegar de volta para a lista de receitas
  voltarParaLista() {
    this.router.navigateByUrl('receitas/').then((result) => {
      if (result) {
        // A navegação foi bem-sucedida
      } else {
        // A navegação foi interrompida ou ocorreu um erro
      }
    });
  }
}
