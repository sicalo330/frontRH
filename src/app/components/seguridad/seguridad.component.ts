import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/service/backend.service';
import { MatDialog } from '@angular/material/dialog';
import { EditCandidateComponent } from '../edit-candidate/edit-candidate.component';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent {
  searchText: string = ''
  listCandidates: any[] = []
  selectedCandidate: any = null

  completo: number = 0
  sARL: number = 0
  aprobados: number = 0
  descartados: number = 0

  constructor(private router:Router, private backend:BackendService, public dialog: MatDialog){}

  ngOnInit(): void {
      this.backend.getCandidate().subscribe(data => {
        this.listCandidates = data
        console.log(data)
        this.selectedCandidate = this.listCandidates[0]
        this.updateCounters()
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
    this.completo = this.listCandidates.filter(
      c => c.estado == 'Completo'
    ).length

    this.sARL = this.listCandidates.filter(
      c => c.estado == 'Sin ARL'
    ).length
  }
}
