import { Injectable } from '@angular/core';
import { NovaTransferenciaComponent } from '../nova-transferencia/nova-transferencia.component';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private novaTrans: NovaTransferenciaComponent;

  constructor() {
    this.listaTransferencia = []
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any){
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

}
