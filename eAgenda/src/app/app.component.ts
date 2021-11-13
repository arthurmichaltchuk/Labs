import { Component, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { rejects } from 'assert';
// import { resolve } from 'dns';
// import { Observable } from 'rxjs';
import { ITarefaService } from './shared/interfaces/ITarefaService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eAgenda';
  registroSelecionado: number;

  constructor(private servicoModal: NgbModal,
    @Inject('ITarefaServiceToken') private servico : ITarefaService) {

      // this.minhaPromise('tarefa')
      // .then(result => console.log(result))
      // .catch(erro => console.log(erro));

  }

  // minhaObservable(): Observable<string>{
  //   return new Observable(subscriber =>{
  //     subscriber.next('Olá');
  //     subscriber.next('Olá de novo')
  //     setTimeout(()=> {
  //       subscriber.next('Olá com delay.')
  //     }, 2000);
  //   });
  // }

  // minhaPromise(titulo: string): Promise<string>{
  //   return new Promise((resolve, rejects) => {
  //     if(titulo == 'tarefa'){
  //       setTimeout(()=>{
  //       resolve('Titulo '+ titulo)        
  //       }, 2000);
  //     }else{
  //       rejects('Titulo não é tarefa');
  //     }      
  //   })
  // }

  abrirConfirmacao(modal: any){
    this.servicoModal.open(modal).result.then((resultado) =>{
      if(resultado == 'Excluir'){
        this.servico.excluirTarefa(this.registroSelecionado);        
      }
    }
    );
  }
}
