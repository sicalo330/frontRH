import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { CreateStudentsComponent } from './components/create-students/create-students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EditCandidateComponent } from './components/edit-candidate/edit-candidate.component';
import { NominaComponent } from './components/nomina/nomina.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentsComponent,
    LoginComponent,
    HeaderComponent,
    InicioComponent,
    EditCandidateComponent,
    NominaComponent,
    EvaluacionComponent,
    SeguridadComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
