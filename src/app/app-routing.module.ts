import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CreateStudentsComponent } from './components/create-students/create-students.component';
import { NominaComponent } from './components/nomina/nomina.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'createCandidates', component: CreateStudentsComponent},
  { path: 'nomina', component: NominaComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
