import { Injectable } from '@angular/core';
import { ITarefaService } from 'src/app/shared/interfaces/ITarefaService';
import { Tarefa } from 'src/app/shared/model/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService implements ITarefaService{

  constructor() { }

  public adicionarTarefa(tarefa: Tarefa){
    console.log(tarefa)
  }

  public obterTarefa(tarefaId : number): Tarefa{
    var tarefa = new Tarefa(1, 'voar', 2, new Date(2020, 5, 9), 10, new Date(2020, 5, 9));
    return tarefa
  }

  public atualizarTarefa(tarefa : Tarefa){
    console.log(tarefa)
  }

  public obterTarefas() : Tarefa[]{
    var listaTarefas: Tarefa[] = [];

    listaTarefas.push(new Tarefa(1, 'correr', 0, new Date(2020, 5, 9), 100, new Date(2020, 5, 9)))
    listaTarefas.push(new Tarefa(2, 'correr', 1, new Date(2020, 5, 9), 50, new Date(2020, 5, 9)))
    listaTarefas.push(new Tarefa(3, 'correr', 2, new Date(2020, 5, 9), 20, new Date(2020, 5, 9)))
    listaTarefas.push(new Tarefa(4, 'correr', 1, new Date(2020, 5, 9), 10, new Date(2020, 5, 9)))
    listaTarefas.push(new Tarefa(5, 'correr', 0, new Date(2020, 5, 9), 70, new Date(2020, 5, 9)))

    return listaTarefas
  }

  excluirTarefa(tarefaId: number): void{

  }
}
