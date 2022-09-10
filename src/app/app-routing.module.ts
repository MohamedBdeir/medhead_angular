import { parseHostBindings } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [



  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  {path:"hospitals", loadChildren: () => import('./hospitals/hospitals.module').then(m => m.HospitalsModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) export class AppRoutingModule { }
