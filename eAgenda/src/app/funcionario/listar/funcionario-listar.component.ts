import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/shared/model/Funcionario';

@Component({
  selector: 'app-funcionario-listar',
  templateUrl: './funcionario-listar.component.html',
})
export class FuncionarioListarComponent implements OnInit {

  titulo: string = "Listar Funcionário";
  listaFuncionarios: Funcionario[] = [];

  constructor() { }

  ngOnInit(): void {
    this.obterFuncionario()
  }

  obterFuncionario(){
    this.listaFuncionarios.push(new Funcionario(1, 'arthur', '12331314141', new Date(2020,5,9), 0))
    this.listaFuncionarios.push(new Funcionario(1, 'arthur', '12331314141', new Date(2020,5,9), 0))
    this.listaFuncionarios.push(new Funcionario(1, 'arthur', '12331314141', new Date(2020,5,9), 0))
    this.listaFuncionarios.push(new Funcionario(1, 'arthur', '12331314141', new Date(2020,5,9), 0))
    this.listaFuncionarios.push(new Funcionario(1, 'arthur', '12331314141', new Date(2020,5,9), 0))
  }

  converterCargo(tipo : number): string{
    if (tipo == 0)
      return "Supervisor";
    
    if (tipo == 1)
      return "Gerente";

    if (tipo == 2)
      return "Funcionario";

    else 
      return ""
  }

}
