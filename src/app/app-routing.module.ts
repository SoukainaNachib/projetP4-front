import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { ReceptionisteComponent } from './components/receptioniste/receptioniste.component';
import { UserComponent } from './components/user/user.component';
import { SyntheseComponent } from './components/synthese/synthese.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { RoleComponent } from './components/role/role.component';
import { RendezVousComponent } from './components/rendez-vous/rendez-vous.component';
import { PracticienComponent } from './components/practicien/practicien.component';
import { PatientComponent } from './components/patient/patient.component';
import { DossierMComponent } from './components/dossier-m/dossier-m.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { AutreResourceComponent } from './components/autre-resource/autre-resource.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AuthComponent } from './components/auth/auth.component';
import { InfermierComponent } from './components/infermier/infermier.component';
import { MedcinComponent } from './components/medcin/medcin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  { path: "auth", component: AuthComponent },
  { path: "administration", component: AdministrationComponent },
  { path: "autre-resource", component: AutreResourceComponent },
  { path: "communication", component: CommunicationComponent },
  { path: "dossier-m", component: DossierMComponent },
  { path: "patient", component: PatientComponent },
  { path: "practicien", component: PracticienComponent },
  { path: "rendez-vous", component: RendezVousComponent },
  { path: "role", component: RoleComponent },
  { path: "specialite", component: SpecialiteComponent },
  { path: "synthese", component: SyntheseComponent },
  { path: "user", component: UserComponent },
  { path: "receptioniste", component: ReceptionisteComponent },
  { path: "medcin", component: MedcinComponent },
  { path: "infermier", component: InfermierComponent },
  { path: "formulaire", component: FormulaireComponent },
  { path: "**", component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [MedcinComponent, InfermierComponent, FormulaireComponent, AuthComponent, ReceptionisteComponent, PageNotFoundComponent, AdministrationComponent, AutreResourceComponent, CommunicationComponent, RoleComponent, UserComponent, SyntheseComponent, SpecialiteComponent, RendezVousComponent, PracticienComponent, PatientComponent, DossierMComponent] 
