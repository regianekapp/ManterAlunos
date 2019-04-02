import { Component, OnInit } from '@angular/core';
import { Aluno } from '../modelos/aluno';
import { HttpErrorResponse } from '@angular/common/http'; //Import HTTPCLIENT (HttpClient) removido
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { AlunosService} from '../providers/alunos.service';
import { NavComponent } from '@ionic/core';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  public alunos: Aluno[];

    constructor(private loadingCtrl:LoadingController, //Importa a biblioteca loading
      private alertCtrl:AlertController,
      private alunosService: AlunosService,
      private navCtrl: NavController){}  //injetar navcontrole

  async ngOnInit(){ //async deixa a exibição assincrona
    
    const loading = await this.loadingCtrl.create({
      message:'Aguarde enquantos os alunos são carregados !!!'
    });

    await loading.present(); //Exibi na tela o loading
  this.alunosService.lista()
    //Pode aparecer antes mesmo do loading aparecer
    //this.http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos')
    .subscribe(
      (alunos)=>{
        this.alunos = alunos;
      },
      async (err:HttpErrorResponse)=>{
        console.log('Deu Erro '+ err.status);
        const al = await this.alertCtrl.create({
          header:'Erro',
          message:'Erro ao carregar pagina',
          buttons: [{text: 'OK'}]
        });
        await al.present();
      }
    ).add(
      ()=>{
        loading.dismiss(); //Desliga o loading da tela se já estiver carregado os arquivos
      }
    )
  }

  selecionaAluno(aluno: Aluno){
    console.log("Aluno selecionado: "+ aluno.nome);  //vai para home.page.html

    let extras: NavigationExtras = {
      queryParams:{
        alunoSelecionado: JSON.stringify(aluno)
      }
    }

    this.navCtrl.navigateForward(['escolha'], extras); //vai para a pagina nova criada escolha
  }

}
