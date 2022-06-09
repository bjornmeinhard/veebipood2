import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';

const routes: Routes = [
  { path: "", component: AvalehtComponent},
  { path: "ostukorv", component: OstukorvComponent},
  { path: "lisa-toode", component: LisaToodeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }