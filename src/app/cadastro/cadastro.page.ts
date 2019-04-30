import { Component, OnInit } from '@angular/core';
import { Aluno } from '../modelos/aluno';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  [x: string]: any;

  private aluno: Aluno;
  
  constructor(activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params =>{
        this.aluno = <Aluno>JSON.parse(params["alunoSelecionado"]);
      })
  }

}
