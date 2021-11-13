import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaCriarComponent } from './tarefa/criar/tarefa-criar.component';
import { TarefaEditarComponent } from './tarefa/editar/tarefa-editar.component';
import { TarefaListarComponent } from './tarefa/listar/tarefa-listar.component';
import { LocalStorageTarefaService } from './tarefa/services/local-storage-tarefa.service';
import { ExemploTarefaGuard } from './shared/guards/exemplo-tarefa.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpTarefaService } from './tarefa/services/http-tarefa-service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TarefaCriarComponent,
    TarefaCriarComponent,
    TarefaEditarComponent,
    TarefaListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    {provide: 'IHttpTarefaServiceToken', useClass: HttpTarefaService },
    ExemploTarefaGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
