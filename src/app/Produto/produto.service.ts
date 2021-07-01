import { Injectable } from '@angular/core';
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
     return this.http.post<Produto>(`${this.API}`, produto);
  }

  editarProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.API}/${produto.id}`, produto);
  }

 excluirProduto(idProduto: number): Observable {
  return this.http.delete(`${this.API}/${idProduto}`);
  }
}
