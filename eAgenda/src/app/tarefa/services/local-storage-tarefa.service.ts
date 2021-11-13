import { Injectable } from '@angular/core';
import { ITarefaService } from 'src/app/shared/interfaces/ITarefaService';
import { Tarefa } from 'src/app/shared/model/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageTarefaService implements ITarefaService{

  private storage: Storage;
  private key: string = "listaTarefa";
  private listaTarefas: Tarefa[];

  constructor(){
    this.storage = window.localStorage;
    this.obterTarefaLocalStorage();
  }

  adicionarTarefa(tarefa: Tarefa): void{
    tarefa.id = this.obtemId();
    this.listaTarefas.push(tarefa);
    this.storage.setItem(this.key, JSON.stringify(this.listaTarefas));
  }
  obterTarefa(tarefaId: number): Tarefa{

    var tarefa : any;

    this.listaTarefas.some(function(el){
      if(el.id == tarefaId){
        tarefa = el;
      }
    })

    return tarefa;
  }
  atualizarTarefa(tarefa: Tarefa):void{

    this.listaTarefas.some(function (el) {
      if(el.id == tarefa.id){
        el.titulo = tarefa.titulo;
        el.prioridade = tarefa.prioridade;
        el.dataCriacao = tarefa.dataCriacao;
        el.percentual = tarefa.percentual;
        el.dataConclusao = tarefa.dataConclusao;
      }
    });

    this.storage.setItem(this.key, JSON.stringify(this.listaTarefas))
  }
  
  obterTarefas(): Tarefa[]{
    return this.listaTarefas;
  }

  excluirTarefa(tarefaId:number):void{
    
  }

  private obtemId(): number{
    var tarefa = this.listaTarefas[this.listaTarefas.length - 1];

    if(tarefa === undefined)
      return 1;

    return tarefa.id + 1;
  }

  private obterTarefaLocalStorage(){
    var localStorageTarefas = this.storage.getItem(this.key)

    if (localStorageTarefas) {
      this.listaTarefas = JSON.parse(localStorageTarefas);
    }
    else{
      this.listaTarefas = [];    
    }
  }
}
