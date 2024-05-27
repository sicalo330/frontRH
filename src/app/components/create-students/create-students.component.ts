import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/model/Student';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent {
  dataStudents!:any

  constructor(private fb:FormBuilder,private backend:BackendService){
    this.dataStudents = this.fb.group({
      nombre:['', Validators.required],
      edad:['', Validators.required]
    })
  }

  createStudent(){
    const data: Student = {
      nombre: this.dataStudents.get('nombre')!.value,
      edad: this.dataStudents.get('edad')!.value
    };
    this.backend.postStudents(data).subscribe(data => {
      console.log(data)
      location.reload()
    })
  }
}
