import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaCriarComponent } from './tarefa/criar/tarefa-criar.component';
import { FuncionarioCriarComponent } from './funcionario/criar/funcionario-criar.component';
import { FuncionarioListarComponent } from './funcionario/listar/funcionario-listar.component';
import { TarefaEditarComponent } from './tarefa/editar/tarefa-editar.component';

const routes: Routes = [
  {path: '', redirectTo:'/', pathMatch: 'full'},
  {path: "tarefa/criar", component: TarefaCriarComponent },
  {path: "funcionario/criar", component: FuncionarioCriarComponent },
  {path: "funcionario/listar", component: FuncionarioListarComponent },
  {path: "tarefa/editar:id", component: TarefaEditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
