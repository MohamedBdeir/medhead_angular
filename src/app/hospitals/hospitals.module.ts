import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path: "", component: MainComponent },
  { path: ":id", component: DetailsComponent }
]

@NgModule({
  declarations: [
    MainComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HospitalsModule { }
