import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EsR1RoutingModule } from './es-r1-routing.module';
import {EsLm1Module} from 'es-library';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EsR1RoutingModule,
    EsLm1Module
  ]
})
export class EsR1Module { }
