import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import { RouterModule, Routes } from '@angular/router';
import { CadastarComponent } from './cadastar/cadastar.component';


const routes: Routes = [
  { path: '', component: CadastarComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: 'cadastrar', component: CadastarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
