import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaCriarComponent } from './tarefa/criar/tarefa-criar.component';
import { FuncionarioCriarComponent } from './funcionario/criar/funcionario-criar.component';
import { FuncionarioListarComponent } from './funcionario/listar/funcionario-listar.component';
import { TarefaEditarComponent } from './tarefa/editar/tarefa-editar.component';
import { TarefaListarComponent } from './tarefa/listar/tarefa-listar.component';
import { LocalStorageTarefaService } from './tarefa/services/local-storage-tarefa.service';

@NgModule({
  declarations: [
    AppComponent,
    TarefaCriarComponent,
    TarefaCriarComponent,
    FuncionarioCriarComponent,
    FuncionarioListarComponent,
    TarefaEditarComponent,
    TarefaListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: 'ITarefaServiceToken', useClass: LocalStorageTarefaService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
