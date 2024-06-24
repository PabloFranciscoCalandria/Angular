import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  // Este es el mensaje que recibe dede el padre
  // @Input() recibeHijo: string = '';

  // Emisor de eventos
  @Output() mensajeDesdeHijo = new EventEmitter<string>();
  @Output() incrementarDesdeHijo = new EventEmitter<void>(); //<void> es la palabra reservada para mandar eventos vacios
  @Output() decrementarDesdeHijo = new EventEmitter<void>();

  mensaje: string = '';

  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje);
  }

  incrementar(){
    this.incrementarDesdeHijo.emit();
  }

  decrementar(){
    this.decrementarDesdeHijo.emit();
  }
}
