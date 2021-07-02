import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.scss']
})
export class AddProdutoComponent implements OnInit {
   formProduto: FormGroup;
   produto: Produto;
  constructor(private fb: FormBuilder,
                private dialogRef: MatDialogRef<AddProdutoComponent>,
                private service: ProdutoService,
                private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.criaFormProduto();
  }
    criaFormProduto(){
      this.formProduto = this.fb.group({
        nome:['', Validators.required],
        valor:['', Validators.required]
      });
    }



    salvarProduto(){
        this.produto = this.formProduto.value;
        this.service.salvarProduto(this.produto).subscribe(data => {
          this.dialogRef.close(data);
        }, error => {
              this.snackBar.open(`Erro ao tentar Salvar o Produto:`,`Fechar`,
              {
                duration: 5000,
              })
        });
    }
}
