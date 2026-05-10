import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  listCandidates: any[] = []

  enEvaluacion: number = 0
  enEntrevista: number = 0
  aprobados: number = 0
  descartados: number = 0

  constructor(private router:Router, private backend:BackendService){}

  ngOnInit(): void {

    this.backend.getCandidate().subscribe(data => {
      this.listCandidates = data
      this.enEvaluacion = this.listCandidates.filter(
        c => c.estado == 'Pendiente'
      ).length

      this.enEntrevista = this.listCandidates.filter(
        c => c.estado == 'Entrevista'
      ).length

      this.aprobados = this.listCandidates.filter(
        c => c.estado == 'Aprobado'
      ).length

      this.descartados = this.listCandidates.filter(
        c => c.estado == 'Descartado'
      ).length
    }, error => {
      console.log(error)
    })

  }

}
