import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioCriarComponent } from './funcionario/criar/funcionario-criar.component';
import { FuncionarioListarComponent } from './funcionario/listar/funcionario-listar.component';
import { TarefaCriarComponent } from './tarefa/criar/tarefa-criar.component';
import { TarefaListarComponent } from './tarefa/listar/tarefa-listar.component';
import { TarefaEditarComponent } from './tarefa/editar/tarefa-editar.component';

const routes: Routes = [
  {path: '', redirectTo:'/', pathMatch: 'full'},
  {path: "funcionario/criar", component: FuncionarioCriarComponent },
  {path: "funcionario/listar", component: FuncionarioListarComponent },
  {path: "tarefa/criar", component: TarefaCriarComponent },
  {path: "tarefa/listar", component: TarefaListarComponent },
  {path: "tarefa/editar/:id", component: TarefaEditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
