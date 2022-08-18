import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargueComponent } from './cargue/cargue.component';

const routes: Routes = [
  {
    path: '',component:CargueComponent
  },
  {
    path: 'cargue',component:CargueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
