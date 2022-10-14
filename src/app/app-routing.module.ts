import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LeilaoLiveComponent } from './views/leilao-live/leilao-live.component';
import { LeilaoAgendsComponent } from './views/leilao-agends/leilao-agends.component';
import { DetailsLiveComponent } from './views/details-live/details-live.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import {DetailsAgendsComponent } from './components/details-agends/details-agends.component'
const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path: 'aovivo', component: LeilaoLiveComponent},
    {path: 'agendado', component: LeilaoAgendsComponent},
    {path: 'detalhes', component: DetailsLiveComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'detalhesAgenda', component: DetailsAgendsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
