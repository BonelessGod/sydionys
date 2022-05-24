import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CosplayComponent } from './pages/cosplay/cosplay.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'cosplay', component: CosplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
