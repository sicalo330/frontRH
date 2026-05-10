import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/service/backend.service';
import { EditCandidateComponent } from '../edit-candidate/edit-candidate.component';

@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.css']
})
export class NominaComponent {
  searchText: string = ''
  listCandidates: any[] = []
  selectedCandidate: any = null

  enEvaluacion: number = 0
  enEntrevista: number = 0
  aprobados: number = 0
  descartados: number = 0

    constructor(private router:Router, private backend:BackendService, public dialog: MatDialog){}

    ngOnInit(): void {
      this.backend.getCandidate().subscribe(data => {
        this.listCandidates = data
        console.log(data)
        this.selectedCandidate = this.listCandidates[0]
      })
    }

  filteredCandidates(){
    return this.listCandidates.filter(candidate =>
      candidate.nombre.toLowerCase().includes(this.searchText.toLowerCase()) ||
      candidate.cargo.toLowerCase().includes(this.searchText.toLowerCase()) ||
      candidate.estado.toLowerCase().includes(this.searchText.toLowerCase())
    )
  }

  viewCandidate(candidate:any){
    this.selectedCandidate = candidate
  }

  editCandidate(candidate:any){
    const dialogRef = this.dialog.open(EditCandidateComponent, {width: '600px',data: candidate})
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.ngOnInit()
      }
    })
  }

  deleteCandidate(id:number){
    this.backend.deleteCandidate(id).subscribe(data => {
      if(data == 'ok'){
        location.reload()
      }
    })
  }

  changeStatus(status: string){

    if(!this.selectedCandidate) return

    const body = {
      nombre: this.selectedCandidate.nombre,
      correo: this.selectedCandidate.correo,
      cargo: this.selectedCandidate.cargo,
      experiencia: this.selectedCandidate.experiencia,
      puntaje: this.selectedCandidate.puntaje,
      estado: status
    }

    this.backend.updateCand(this.selectedCandidate.id, body).subscribe(data => {
      this.selectedCandidate.estado = status
      const index = this.listCandidates.findIndex(
        c => c.id == this.selectedCandidate.id
      )

      if(index != -1){
        this.listCandidates[index].estado = status
      }
      
      this.updateCounters()
    })

  }

  updateCounters(){
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
      c => c.estado == 'Rechazado'
    ).length

  }


}
