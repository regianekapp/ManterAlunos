import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { query } from '@angular/core/src/render3';
import { Aluno } from '../modelos/aluno';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {

  constructor(private navCtrl: NavController, 
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.queryParams.
    subscribe(params => {
      let aluno = <Aluno>JSON.parse(params["alunoSelecionado"]);
    console.log("O aluno que chegou na página de escolha é: " + aluno.nome);
    })
  }

  voltar(){
    this.navCtrl.back();
  }

}
