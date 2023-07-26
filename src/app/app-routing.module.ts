import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaReceitasComponent } from './lista-receitas/lista-receitas.component';

const routes: Routes = [
  { path: '', redirectTo: '/receitas', pathMatch: 'full' },
  { path: 'receitas', component: ListaReceitasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
