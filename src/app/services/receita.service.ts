import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private apiUrl = 'http://localhost:8080/api/receitas'; // Substitua pela URL correta do seu backend

  constructor(private http: HttpClient) { }

  getReceitas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
