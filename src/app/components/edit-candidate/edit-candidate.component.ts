import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css']
})
export class EditCandidateComponent {

  dataCandidates: FormGroup

  constructor(private backend: BackendService,private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditCandidateComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
    this.dataCandidates = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      cargo: ['', Validators.required],
      experiencia: ['', Validators.required],
      puntaje: ['', Validators.required],
      estado: ['', Validators.required]
    })
  }

    ngOnInit(): void {
      this.dataCandidates.patchValue({
        nombre: this.data.nombre,
        correo: this.data.correo,
        cargo: this.data.cargo,
        experiencia: this.data.experiencia,
        puntaje: this.data.puntaje,
        estado: this.data.estado
      })

    }

    updateCandidate(){
      const body = this.dataCandidates.value
      this.backend.updateCand(this.data.id, body).subscribe(data => {
        console.log(data)
        this.dialogRef.close(true)
      })
    }




}
