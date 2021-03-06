import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { PoedComponent } from './poed/poed.component';
import { FormsModule } from '@angular/forms';
import { KodulehtComponent } from './koduleht/koduleht.component';
import { LisaKeskusComponent } from './lisa-keskus/lisa-keskus.component';
import { YksikToodeComponent } from './yksik-toode/yksik-toode.component';
import { MuudaToodeComponent } from './muuda-toode/muuda-toode.component';
import { HaldaTooteidComponent } from './halda-tooteid/halda-tooteid.component';

@NgModule({
  declarations: [
    AppComponent,
    AvalehtComponent,
    OstukorvComponent,
    LisaToodeComponent,
    PoedComponent,
    KodulehtComponent,
    LisaKeskusComponent,
    YksikToodeComponent,
    MuudaToodeComponent,
    HaldaTooteidComponent
  ],
  imports: [
    BrowserModule, //ngIf, ngFor
    AppRoutingModule, //routerLink, router-outlet
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
