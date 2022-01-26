import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllotComponent } from './allot/components/allot/allot.component';

const routes: Routes = [
  {
    path: 'allot',
    component: AllotComponent
  },
  {
    path: '',
    redirectTo: 'allot',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
