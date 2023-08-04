import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { Receita } from '../models/receita';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  private apiUrl = 'http://localhost:8080/api/receitas/'; // URL da API

  constructor(private http: HttpClient) {}

  getReceitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.apiUrl);
  }

  getReceitaById(id: number): Observable<Receita | undefined> {
    const url = `${this.apiUrl}${id}`;
    return this.http.get<Receita>(url);
  }

  adicionarReceita(receita: Receita): Observable<Receita> {
    const url = `${this.apiUrl}`;
    return this.http.post<Receita>(url, receita);
  }


  getCategorias(): Observable<Categoria[]> {
    const url = 'http://localhost:8080/api/categorias/';
    return this.http.get<Categoria[]>(url);
  }

  excluirReceita(id: number): Observable<void> {
    const url = `${this.apiUrl}${id}`;
    return this.http.delete<void>(url);
  }

  atualizarReceita(receita: Receita): Observable<Receita> {
    const url = `${this.apiUrl}${receita.id}`;
    return this.http.put<Receita>(url, receita);
  }
}
