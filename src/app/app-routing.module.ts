import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'r1',
    loadChildren: ()=>import('./es-r1/es-r1.module').then((mod)=>mod.EsR1Module)
  },
  {
    path:'r2',
    loadChildren: ()=>import('./es-r2/es-r2.module').then((mod)=>mod.EsR2Module)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
