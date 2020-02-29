import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DerechosHumanosComponent } from './derechos-humanos/derechos-humanos.component';
import { RouterModule, Routes } from "@angular/router";
import { FamiliaComponent } from './familia/familia.component';
import { MedioAmbienteComponent } from './medio-ambiente/medio-ambiente.component';
import { TemasInteresComponent } from './temas-interes/temas-interes.component';
import { ConveniosComponent } from './convenios/convenios.component';
import { ContactosComponent } from './contactos/contactos.component';

const routes: Routes = [
  {path: '', redirectTo: '/derechos-humanos', pathMatch: 'full'},
  {path: 'derechos-humanos', component: DerechosHumanosComponent},
  {path: 'familia', component: FamiliaComponent},
  {path: 'medio-ambiente', component: MedioAmbienteComponent},
  {path: 'temas-interes', component: TemasInteresComponent},
  {path: 'convenios', component: ConveniosComponent},
  {path: 'contactos', component: ContactosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DerechosHumanosComponent,
    FamiliaComponent,
    MedioAmbienteComponent,
    TemasInteresComponent,
    ConveniosComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
