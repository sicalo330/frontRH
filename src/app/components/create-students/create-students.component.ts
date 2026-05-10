import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/model/Student';
import { BackendService } from 'src/app/service/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent {
  dataCandidates!:FormGroup

  constructor(private fb:FormBuilder,private backend:BackendService,private router:Router){
    this.dataCandidates = this.fb.group({
      nombre:['', Validators.required],
      correo:['', Validators.required],
      cargo:['', Validators.required],
      experiencia:['', Validators.required],
      puntaje:['', Validators.required],
      estado:['', Validators.required],
      salario:['', Validators.required],
      ajuste:['', Validators.required],
    })
  }

  createStudent(){
    const data: any = {
      nombre: this.dataCandidates.get('nombre')!.value,
      correo: this.dataCandidates.get('correo')!.value,
      cargo: this.dataCandidates.get('cargo')!.value,
      experiencia: this.dataCandidates.get('experiencia')!.value,
      puntaje: this.dataCandidates.get('puntaje')!.value,
      estado: this.dataCandidates.get('estado')!.value,
      salario: this.dataCandidates.get('salario')!.value,
      ajuste: this.dataCandidates.get('ajuste')!.value,
    };

    if(data.puntaje > 100){
      alert("No se puede poner puntajes mayores que 100")
      return
    }

    this.backend.createCandidate(data).subscribe(data => {
      location.reload()
    // this.router.navigate(['inicio'])
    })
  }
}
