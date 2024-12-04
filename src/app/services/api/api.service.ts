
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  limite: number = 18;
  private apiUrl1 = `https://openlibrary.org/search.json?q=random&limit=${this.limite}`;
  private apiUrl2 = `https://openlibrary.org/search.json?q=romance&limit=${this.limite}`;
  private apiUrl3 = `https://openlibrary.org/search.json?q=horror&limit=${this.limite}`;
  private apiUrlBestsellers = `https://openlibrary.org/search.json?q=bestsellers&limit=${this.limite}`;


  constructor(
    private http: HttpClient) { }

  // Método para obter dados da API
  getData1(): Observable<any> {
    return this.http.get<any>(this.apiUrl1);
  }
  getData2(): Observable<any> {
    return this.http.get<any>(this.apiUrl2);
  }
  getData3(): Observable<any> {
    return this.http.get<any>(this.apiUrl3);
  }
  getDataBestsellers(): Observable<any> {
    return this.http.get<any>(this.apiUrlBestsellers);
  }
  getPesquisa(input: string): Observable<any> {
    const url = `https://openlibrary.org/search.json?title=${input}&limit=5`
    return this.http.get<any>(url);
  }
  getLivroDetalhes(id: string): Observable<any> {
    const url = `https://openlibrary.org/api/books?bibkeys=OLID:${id}&format=json&jscmd=data`;
    return this.http.get<any>(url);
  };

};

//
