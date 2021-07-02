import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddProdutoComponent } from '../add-produto/add-produto.component';
import { EditaProdutoComponent } from '../edita-produto/edita-produto.component';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.scss']
})
export class ListagemProdutoComponent implements OnInit {

  constructor(private service: ProdutoService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }
  produtos: Produto[] = [];
  colunasTabela: string[] = ['id', 'nome', 'valor', 'acoes'];
  ngOnInit(): void {
    this.buscarProdutos();
  }

  buscarProdutos(){
    this.service.buscarTodosProdutos().subscribe(data => {
      this.produtos = data;
    }, erro => {
      this.snackBar.open('Erro ao Buscar Produtos', 'Fechar', {
        duration: 5000,

      });
    })
  }

  abrirModalAddProduto(){
      this.dialog.open(AddProdutoComponent, {
        width: '300px',
        height: '350px'
      }).afterClosed().subscribe(result => {
        if(result){
            this.buscarProdutos();
        }
      });
  }

  abrirModalEditarProduto(produto: Produto){
    this.dialog.open(EditaProdutoComponent, {
      width: '300px',
      height: '350px',
      data: produto
    }).afterClosed().subscribe(result => {
      if(result){
          this.buscarProdutos();
      }
    });
}

abrirModalConfirmacaoExclusao(produto:Produto){

    Swal.fire({
      title: `Excluir Produto`,
      html: `Você deseja realmente excluir o Produto <b>${produto.nome}</b> ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.excluirProduto(produto.id);
      }
    });
  }

   excluirProduto(idProduto: number){
        this.service.excluirProduto(idProduto).subscribe(data => {
          this.snackBar.open('Produto Excluido com sucesso!', null, 
          {duration: 5000
          });
          this.buscarProdutos();
        }, error => {
          this.snackBar.open('Erro ao tentar excluir o produto', null, 
          {duration: 5000
          });
        });
   }  

}
