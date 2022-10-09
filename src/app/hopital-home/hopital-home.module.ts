import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AddSpecToHopitalComponent } from './add-spec-to-hopital/add-spec-to-hopital.component';
import { HopitalMenuComponent } from './hopital-menu/hopital-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HopitalDetailsComponent } from './hopital-details/hopital-details.component';
import { ConfirmedDetailsComponent } from './confirmed-details/confirmed-details.component';
import { LitsComponent } from './lits/lits.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path:"addSpecToHopital", component:AddSpecToHopitalComponent
  },
  {
    path:"setDetails", component: HopitalDetailsComponent
  },
  {
    path:"viewDetails", component:ConfirmedDetailsComponent
  },
  {
    path:"lits", component: LitsComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    AddSpecToHopitalComponent,
    HopitalMenuComponent,
    HopitalDetailsComponent,
    ConfirmedDetailsComponent,
    LitsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule, 
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule, 
    MatSelectModule,
    MatAutocompleteModule,
    RouterModule.forChild(routes)

  ]
})
export class HopitalHomeModule { }
