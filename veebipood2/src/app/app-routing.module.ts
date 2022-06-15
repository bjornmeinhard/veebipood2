import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { KodulehtComponent } from './koduleht/koduleht.component';
import { LisaKeskusComponent } from './lisa-keskus/lisa-keskus.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { PoedComponent } from './poed/poed.component';

const routes: Routes = [
  { path: "", component: KodulehtComponent},
  { path: "soendus", component: AvalehtComponent},
  { path: "ostukorv", component: OstukorvComponent},
  { path: "lisa-toode", component: LisaToodeComponent},
  { path: "poed", component: PoedComponent},
  { path: "lisa-keskus", component: LisaKeskusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
