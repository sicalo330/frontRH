import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  constructor(private backend:BackendService){}

  infoStudents:any

  ngOnInit(): void {
    this.backend.getStudents().subscribe(data => {
      console.log(data)
      this.infoStudents = data;
    })
  }
}
