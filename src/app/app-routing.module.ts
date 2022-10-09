import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardService } from './services/admin-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ValidateAccountComponent } from './shared/validate-account/validate-account.component';


const routes: Routes = [



  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canLoad: [AuthGuardService, AdminGuardService]
  },
  {
    path: "hospitals", loadChildren: () => import('./hospitals/hospitals.module').then(m => m.HospitalsModule),
    canLoad: [AuthGuardService]
  },
  {
    path: "specialites", loadChildren: () => import('./specialites/specialites.module').then(m => m.SpecialitesModule),
    canLoad: [AuthGuardService]
  },
  {
    path: "valider", component: ValidateAccountComponent
  },
  {
    path:'HMenu', loadChildren: () => import('./hopital-home/hopital-home.module').then(m => m.HopitalHomeModule)
  },
  {
    path:'urgences', loadChildren: () => import('./urgences/urgences.module').then(m => m.UrgencesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) export class AppRoutingModule { }
