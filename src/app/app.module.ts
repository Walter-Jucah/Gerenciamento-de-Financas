import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Importe o AppRoutingModule

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
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule, // Certifique-se de importar o AppRoutingModule aqui
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
