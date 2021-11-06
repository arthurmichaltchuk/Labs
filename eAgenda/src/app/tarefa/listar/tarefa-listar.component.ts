import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/shared/model/Tarefa';

@Component({
  selector: 'app-tarefa-listar',
  templateUrl: './tarefa-listar.component.html'
})
export class TarefaListarComponent implements OnInit {

  titulo: string = "Listar Tarefa";
  listaTarefa: Tarefa[] = [];

  constructor() { }

  ngOnInit(): void {
    this.obterTarefa()
  }

  obterTarefa(){
    this.listaTarefa.push(new Tarefa(1, 'correr', 2, new Date(2020, 5, 9), 0, new Date(2020, 5, 9)))
    this.listaTarefa.push(new Tarefa(2, 'correr', 2, new Date(2020, 5, 9), 0, new Date(2020, 5, 9)))
    this.listaTarefa.push(new Tarefa(3, 'correr', 2, new Date(2020, 5, 9), 0, new Date(2020, 5, 9)))
    this.listaTarefa.push(new Tarefa(4, 'correr', 2, new Date(2020, 5, 9), 0, new Date(2020, 5, 9)))
    this.listaTarefa.push(new Tarefa(5, 'correr', 2, new Date(2020, 5, 9), 0, new Date(2020, 5, 9)))
  }

  converterPrioridade(tipo : number): string{
    if (tipo == 0)
      return "Baixa";
    
    if (tipo == 1)
      return "Normal";

    if (tipo == 2)
      return "Alta";

    else 
      return ""
  }

}