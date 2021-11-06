import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tarefa } from 'src/app/shared/model/Tarefa';

@Component({
  selector: 'app-tarefa-editar',
  templateUrl: './tarefa-editar.component.html',
})
export class TarefaEditarComponent implements OnInit {

  titulo: string = "Editar Tarefa"
  cadastroForm: FormGroup
  tarefa: Tarefa
  id: any;

  constructor(private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id")
    console.log(this.id)
    this.obterTarefa()

    this.cadastroForm = new FormGroup({
      titulo: new FormControl(this.tarefa.titulo),
      prioridade: new FormControl(this.tarefa.prioridade),
      dataCriacao: new FormControl(this.tarefa.dataCriacao.toISOString().substring(0,16)),
      percentual: new FormControl(this.tarefa.percentual),
      dataConclusao: new FormControl(this.tarefa.dataConclusao.toISOString().substring(0,16))
    })

  }

  editarTarefa() {
    console.log(this.cadastroForm.value)
  }

  obterTarefa() {
    this.tarefa = new Tarefa(1, 'correr', 2, new Date(2020, 5, 9), 0, new Date(2020, 5, 9));
  }
}
