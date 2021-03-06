import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaCriarComponent } from './tarefa/criar/tarefa-criar.component';
import { TarefaListarComponent } from './tarefa/listar/tarefa-listar.component';
import { TarefaEditarComponent } from './tarefa/editar/tarefa-editar.component';
//import { ExemploTarefaGuard } from './shared/guards/exemplo-tarefa.guard';

const routes: Routes = [
  {path: '', redirectTo:'/', pathMatch: 'full'},
  {path: "tarefa/criar", component: TarefaCriarComponent },
  {path: "tarefa/listar", component: TarefaListarComponent},
  {path: "tarefa/editar/:id", component: TarefaEditarComponent }//, canActivate: [ExemploTarefaGuard] 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
