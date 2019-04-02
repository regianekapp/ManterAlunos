import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../modelos/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http:HttpClient) { } //veio de componentes home.page.ts

  lista(){
    return this.http.get<Aluno[]>('http://gilsonpolito-api.herokuapp.com/alunos');
  }
}
