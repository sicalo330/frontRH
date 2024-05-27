import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  constructor(private backend:BackendService, public dialog:MatDialog){}

  dataDelete:any
  infoStudents:any

  ngOnInit(): void {
    this.backend.getStudent().subscribe(data => {
      this.infoStudents = data;
    })
  }

  openEdit(student:any){
    console.log(student)
    const dialogRef = this.dialog.open(EditStudentComponent,{
      data: {
        id: student.id,
        nombre: student.nombre,
        edad:student.edad,
      }
    })

  }

  deleteStudent(id:any){
    this.backend.deleteStudent(id).subscribe(data => {
      console.log(data)
      location.reload()
    })
  }
}
