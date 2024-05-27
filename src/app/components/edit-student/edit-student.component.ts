import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  dataPutStudent!:FormGroup

  constructor(private fb:FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private backend:BackendService){
    this.dataPutStudent = this.fb.group({
      nombre:['', Validators.required],
      edad:['', Validators.required]
    })
  }

  ngOnInit(): void {
    //Esta función agrega los datos del estudiante al que se le hizo click en el formulario, para que no hayan datos vacíos 
    //si solo se quiere cambiar el nombre o la edad
    this.createForm(this.data.nombre, this.data.edad)
  }

  createForm(nombre:string, edad:number){
    this.dataPutStudent = this.fb.group({
      nombre:nombre,
      edad:edad
    })
  }

  updateStudent(){
    const dataUpdate: any = {
      nombre: this.dataPutStudent.get('nombre')!.value,
      edad: this.dataPutStudent.get('edad')!.value,
    }
    this.backend.updateStudent(this.data.id, dataUpdate.nombre, dataUpdate.edad).subscribe(data => {
      location.reload()
    })
  }
}
