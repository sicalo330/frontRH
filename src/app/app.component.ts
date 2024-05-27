import { Component, OnInit } from '@angular/core';
import { BackendService } from './service/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private backend:BackendService){}
  title = 'angularDocker';

  ngOnInit(): void {
    this.backend.conection().subscribe(data => {
      console.log(data)
    })
  }
}
