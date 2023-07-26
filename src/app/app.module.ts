import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaReceitasComponent } from './lista-receitas/lista-receitas.component';
import { DetalhesReceitaComponent } from './detalhes-receita/detalhes-receita.component';
import { AdicionarReceitaComponent } from './adicionar-receita/adicionar-receita.component';
import { AtualizarReceitaComponent } from './atualizar-receita/atualizar-receita.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaReceitasComponent,
    DetalhesReceitaComponent,
    AdicionarReceitaComponent,
    AtualizarReceitaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
