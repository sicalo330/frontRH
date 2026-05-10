import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/service/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  datosUsuario: FormGroup

    constructor(private fb: FormBuilder,private backend:BackendService,private router:Router){
    this.datosUsuario = this.fb.group({
      correo: ['', Validators.required],
      contrasena: ['', Validators.required]
    })
  }

  enviarDatos(){
    console.log("asdasd")
    const datos: any = {
      correo: this.datosUsuario.get('correo')!.value,
      contrasena: this.datosUsuario.get('contrasena')!.value
    };

    this.backend.login(datos).subscribe(data => {
      if(data == "ok"){
        this.router.navigate(['inicio'])
      }
    })
  }


}
