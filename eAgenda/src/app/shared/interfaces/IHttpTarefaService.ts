
import { Observable } from "rxjs";
import { TarefaCreateViewModel } from "../viewModels/Tarefa/TarefaCreateViewModel";

export interface IHttpTarefaService{

    adicionarTarefa(tarefa: TarefaCreateViewModel): Observable<TarefaCreateViewModel>

    //obterTarefas(): Observable<TarefaListViewModel[]>

    //obterTarefa(tarefaId: number): Observable<TarefaDetailsViewModel>

    //atualizarTarefa(tarefa: TarefaEditViewModel): Observable<TarefaEditViewModel>

    //excluirTarefa(tarefaId: number): Observable<number>
}