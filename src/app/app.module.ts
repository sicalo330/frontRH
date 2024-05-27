import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { CreateStudentsComponent } from './components/create-students/create-students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    CreateStudentsComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
