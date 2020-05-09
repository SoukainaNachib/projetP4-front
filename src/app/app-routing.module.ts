import { InfermierComponent } from './components/infermier/infermier.component';
import { MedcinComponent } from './components/medcin/medcin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  { path: "", redirectTo: '/products', pathMatch: 'full' },
  { path: "medcin", component: MedcinComponent },
  { path: "infermier", component: InfermierComponent }
  // { path:"**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
