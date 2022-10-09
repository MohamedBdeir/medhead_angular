import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecHomeComponent } from './spec-home/spec-home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NewSpecComponent } from './new-spec/new-spec.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { GroupeSpecComponent } from './groupe-spec/groupe-spec.component';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';


const routes: Routes = [
  {
    path: "", component: SpecHomeComponent
  }
]


@NgModule({
  declarations: [
    SpecHomeComponent, GroupeSpecComponent,
    NewSpecComponent  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    FormsModule,
    RouterModule.forChild(routes)

  ]
})
export class SpecialitesModule { }
