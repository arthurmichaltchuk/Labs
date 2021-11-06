import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefa-criar',
  templateUrl: './tarefa-criar.component.html',
})
export class TarefaCriarComponent implements OnInit {

  titulo : string = "Cadastrar Compromisso"
  cadastroForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      titulo: new FormControl(''),
      prioridade: new FormControl(''),
      dataCriacao: new FormControl(''),
      percentual: new FormControl(''),
      dataConclusao: new FormControl('')
    })
  }

  adicionarTarefa(){
    console.log(this.cadastroForm.value)
  }

}
