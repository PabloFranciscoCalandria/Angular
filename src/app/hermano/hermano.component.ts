import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit{
  
  // constructor(
  //   private _servicioFamiliar: ServicioFamiliarService
  // ){}

  // Otra forma de usar los injectables es unsando la palabra inject
  // - private _servicioFamiliar = inject(ServicioFamiliarSerive)
  // Al tener esto definido de esta forma, no necesitaremos el constructor
  // Este ejemplo lo haremos de esta forma

  private _servicioFamiliar = inject(ServicioFamiliarService)

  nombre?: string;

  // cuando se inicia se ejecuta esto
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoPequeno('Pedro')
    this.nombre = this._servicioFamiliar.getHermanoPequeno();
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande())
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }
}
