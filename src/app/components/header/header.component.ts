import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router){}

  volverSalas(){
    console.log("salas")
  }

  cerrarSesion(){
    this.router.navigate(['home'])
  }

  verDetalles(){
    this.router.navigate(['inicio'])
  }

  verNomina(){
    this.router.navigate(['nomina'])
  }

  verEvaluacin(){
    this.router.navigate(['evaluacion'])
  }

  verSeguridad(){
    this.router.navigate(['seguridad'])
  }
  
  createCandidate(){
    this.router.navigate(['createCandidates'])
  }
}
