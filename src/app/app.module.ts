import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AutreResourceComponent } from './components/autre-resource/autre-resource.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { DossierMComponent } from './components/dossier-m/dossier-m.component';
import { InfermierComponent } from './components/infermier/infermier.component';
import { MedcinComponent } from './components/medcin/medcin.component';
import { PatientComponent } from './components/patient/patient.component';
import { PracticienComponent } from './components/practicien/practicien.component';
import { ReceptionisteComponent } from './components/receptioniste/receptioniste.component';
import { RendezVousComponent } from './components/rendez-vous/rendez-vous.component';
import { RoleComponent } from './components/role/role.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { SyntheseComponent } from './components/synthese/synthese.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthComponent } from './components/auth/auth.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponent,
    AutreResourceComponent,
    CommunicationComponent,
    DossierMComponent,
    InfermierComponent,
    MedcinComponent,
    PatientComponent,
    PracticienComponent,
    ReceptionisteComponent,
    RendezVousComponent,
    RoleComponent,
    SpecialiteComponent,
    SyntheseComponent,
    UserComponent,
    NavbarComponent,
    FooterComponent,
    AuthComponent,
    PageNotFoundComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
