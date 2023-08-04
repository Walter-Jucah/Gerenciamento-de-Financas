import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  receitaForm!: FormGroup; // Adicione a assertiva de atribuição definitiva aqui
  categorias: Categoria[] = [];

  constructor(
    private receitaService: ReceitaService,
    private router: Router,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder // Injete o FormBuilder
  ) {}

  ngOnInit() {
    // Inicialize o formulário reativo
    this.receitaForm = this.formBuilder.group({
      data: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      categoria: ['', Validators.required]
    });

    // Carregue as categorias disponíveis quando o componente for inicializado
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
    // Verifique se o formulário é válido
    if (this.receitaForm.valid) {
      // Obtenha os valores dos campos do formulário
      const data = this.receitaForm.get('data')!.value;
      const descricao = this.receitaForm.get('descricao')!.value;
      const valor = this.receitaForm.get('valor')!.value;
      const categoria = this.receitaForm.get('categoria')!.value;

      // Crie um novo objeto Receita com os valores do formulário
      const novaReceita: Receita = {
        id: 0, // O ID será gerado pelo backend
        data: new Date(data),
        descricao: descricao,
        valor: valor,
        categoria: categoria
      };

      console.log('Nova Receita:', novaReceita);

      // Chame o serviço para adicionar a receita
      this.receitaService.adicionarReceita(novaReceita).subscribe({
        next: (receita) => {
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
