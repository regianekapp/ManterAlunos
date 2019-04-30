import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { query } from '@angular/core/src/render3';
import { Aluno } from '../modelos/aluno';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {

  private aluno:Aluno;

  constructor(private navCtrl: NavController, 
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.queryParams.
    subscribe(params => {
      let aluno = <Aluno>JSON.parse(params["alunoSelecionado"]);
    console.log("O aluno que chegou na página de escolha é: " + aluno.nome);
    
    })
  }

  avancaCadastro(){
    let extras: NavigationExtras = {
      queryParams:{
        alunoSelecionado: JSON.stringify(this.aluno)}
    };
    this.navCtrl.navigateForward(['cadastro'], extras);
  }


}
