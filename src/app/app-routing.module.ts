import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaReceitasComponent } from './lista-receitas/lista-receitas.component';
import { DetalhesReceitaComponent } from './detalhes-receita/detalhes-receita.component';
import { AdicionarReceitaComponent } from './adicionar-receita/adicionar-receita.component';
import { AtualizarReceitaComponent } from './atualizar-receita/atualizar-receita.component';

const routes: Routes = [
  { path: '', redirectTo: 'receitas/', pathMatch: 'full' },
  { path: 'receitas/', component: ListaReceitasComponent },
  { path: 'receitas/nova', component: AdicionarReceitaComponent },
  { path: 'receitas/detalhes/:id', component: DetalhesReceitaComponent },
  { path: 'receitas/atualizar/:id', component: AtualizarReceitaComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
