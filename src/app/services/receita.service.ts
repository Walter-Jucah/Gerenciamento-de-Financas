import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay, Observable, of} from 'rxjs';
import { Receita } from '../models/receita';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  private apiUrl = 'https://gerenciamentoapi.onrender.com/api/receitas/'; // Substitua pela URL correta da sua API

  constructor(private http: HttpClient) {}

  getReceitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.apiUrl);
  }

  getReceitaById(id: number): Observable<Receita | undefined> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Receita>(url);
  }

  adicionarReceita(receita: Receita): Observable<Receita> {
    // Simulando a adição da receita com um pequeno atraso de 1 segundo
    return of(receita).pipe(delay(1000));
  }

  getCategorias(): Observable<Categoria[]> {
    const url = 'https://gerenciamentoapi.onrender.com/api/categorias/' // Substitua pela URL correta da sua API
    return this.http.get<Categoria[]>(url);
  }

  excluirReceita(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  atualizarReceita(receita: Receita): Observable<Receita> {
    const url = `${this.apiUrl}/${receita.id}`;
    return this.http.put<Receita>(url, receita);
  }
}
