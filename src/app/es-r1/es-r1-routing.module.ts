import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EsLm1C1Component } from 'es-library';

const routes: Routes = [
  {
    path:'',
    component: EsLm1C1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsR1RoutingModule { }
