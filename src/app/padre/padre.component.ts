import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{
  
  nombre?: string;
  fecha?: Date = new Date();
  dolar?: number = 1400;
  pi?: number = Math.PI; // 3.141592653589793

  constructor(
    private _servicioFamiliar: ServicioFamiliarService
  ){}

  // Otra forma de usar los injectables es unsando la palabra inject
  // - private _servicioFamiliar = inject(ServicioFamiliarSerive)
  // Al tener esto definido de esta forma, no necesitaremos el constructor


  // cuando se inicia se ejecuta esto
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juan')
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno())
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }

  valorContador: number = 0;
  // mensajePadre = "Ojala messi llegue al proximo mundial";

  mensajeRecibido: string = '';

  recibirMensaje($event: string){
    this.mensajeRecibido = $event;
  }

  incrementar(){
    this.valorContador++;
  }

  decrementar(){
    this.valorContador--;
  }

}
