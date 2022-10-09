import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommandationComponent } from './recommandation/recommandation.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


const routes: Routes = [
  { path: "", component: RecommandationComponent }
]

@NgModule({
  declarations: [
    RecommandationComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule, 
    MatSelectModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ]
})
export class UrgencesModule { }
