import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import AppRoutes from './modules/Routes';

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes.getAllRoutes())],
  exports: [RouterModule]
})
export class AppRoutingModule { }
