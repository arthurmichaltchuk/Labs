import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IHttpTarefaService } from "src/app/shared/interfaces/IHttpTarefaService";
import { TarefaCreateViewModel } from "src/app/shared/viewModels/Tarefa/TarefaCreateViewModel";

@Injectable({
    providedIn: 'root'
})
export class HttpTarefaService implements IHttpTarefaService{

    constructor(private http: HttpClient) { }

    apiUrl = "http://localhost:4200/api/tarefa";
    
    adicionarTarefa(tarefa: TarefaCreateViewModel): Observable<TarefaCreateViewModel>{

        return this.http.post<TarefaCreateViewModel>(this.apiUrl, tarefa)

    }
}