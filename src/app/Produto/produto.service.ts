import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
API = `${environment.API}/produtos`;
  constructor(private httpClient: HttpClient) { }

  buscarTodosProdutos(): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.API);
  }

  salvarProduto(produto: Produto, ): Observable<Produto> {
     return this.httpClient.post<Produto>(`${this.API}`, produto);
  }

  editarProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(`${this.API}/${produto.id}`, produto);
  }

 excluirProduto(idProduto: number) {
  return this.httpClient.delete(`${this.API}/${idProduto}`);
  }
}
