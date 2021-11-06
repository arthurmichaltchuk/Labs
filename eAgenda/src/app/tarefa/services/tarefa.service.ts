import { Injectable } from '@angular/core';
import { table } from 'console';
import { Tarefa } from 'src/app/shared/model/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  public adicionarTarefa(tarefa: Tarefa){
    console.log(tarefa)
  }

  public obterTarefa(tarefaId : string): Tarefa{
    console.log(tarefaId)
    var tarefa = new Tarefa(1, 'correr', 2, new Date(2020, 5, 9), 0, new Date(2020, 5, 9));
    return tarefa
  }

  public atualizarTarefa(tarefa : Tarefa){
    console.log(tarefa)
  }

  public obterTarefas() : Tarefa[]{
    var listaTarefas: Tarefa[] = [];

    listaTarefas.push(new Tarefa(1, 'correr', 2, new Date(2020, 5, 9), 0, new Date(2020, 5, 9)))
    listaTarefas.push(new Tarefa(2, 'correr', 2, new Date(2020, 5, 9), 0, new Date(2020, 5, 9)))
    listaTarefas.push(new Tarefa(3, 'correr', 2, new Date(2020, 5, 9), 0, new Date(2020, 5, 9)))
    listaTarefas.push(new Tarefa(4, 'correr', 2, new Date(2020, 5, 9), 0, new Date(2020, 5, 9)))
    listaTarefas.push(new Tarefa(5, 'correr', 2, new Date(2020, 5, 9), 0, new Date(2020, 5, 9)))

    return listaTarefas
  }
}
