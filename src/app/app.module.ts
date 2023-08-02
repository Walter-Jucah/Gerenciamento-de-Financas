import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaReceitasComponent } from './lista-receitas/lista-receitas.component';
import { DetalhesReceitaComponent } from './detalhes-receita/detalhes-receita.component';
import { AdicionarReceitaComponent } from './adicionar-receita/adicionar-receita.component';
import { AtualizarReceitaComponent } from './atualizar-receita/atualizar-receita.component';
import { ConfirmacaoDialogComponent } from './confirmacao-dialog/confirmacao-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaReceitasComponent,
    DetalhesReceitaComponent,
    AdicionarReceitaComponent,
    AtualizarReceitaComponent,
    ConfirmacaoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule

  ],
  exports: [
    MatButtonModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
