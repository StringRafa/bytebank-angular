import { Transferencia } from './../models/transferencia.models';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = null;
  destino: number = null;

  constructor(private service: TransferenciaService) {}

  transferir() {
    console.log('Solicitado nova transferencia');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmitir).subscribe((resultado) => {
      console.log(resultado);
      this.limparCampos();
    },
    (error) => console.log(error)
    );
  }

  limparCampos() {
    this.valor = null;
    this.destino = null;
  }
}
