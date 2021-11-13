import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { prioridadeType } from 'src/app/shared/enums/prioridadeEnum';
import { IHttpTarefaService } from 'src/app/shared/interfaces/IHttpTarefaService';
import { TarefaCreateViewModel } from 'src/app/shared/viewModels/Tarefa/TarefaCreateViewModel';

@Component({
  selector: 'app-tarefa-criar',
  templateUrl: './tarefa-criar.component.html',
})
export class TarefaCriarComponent implements OnInit {

  titulo : string = "Cadastrar Tarefa"
  cadastroForm: FormGroup
  tarefa : TarefaCreateViewModel

  tipos = prioridadeType;
  prioridade: any[]

  constructor(private router : Router, @Inject('ITarefaServiceToken') private servico : IHttpTarefaService) { }

  ngOnInit(): void {
    this.prioridade = Object.keys(this.tipos).filter(t => !isNaN(Number(t)))

    this.cadastroForm = new FormGroup({
      titulo: new FormControl(''),
      prioridade: new FormControl('')
    })
  }
  
  adicionarTarefa(){

    this.tarefa = Object.assign({}, this.tarefa, this.cadastroForm.value)
    this.servico.adicionarTarefa(this.tarefa)

    this.router.navigate(['tarefa/listar']);
  }

  cancelar(){
    this.router.navigate(['tarefa/listar']);
  }
}
