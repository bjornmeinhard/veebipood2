import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  ostukorviTooted:any[] = [];

  kogusumma = 0;


  constructor() { }

  ngOnInit(): void {
    let lsostukorv = localStorage.getItem("ostukorv");
    
    if (lsostukorv !== null) {
      this.ostukorviTooted = JSON.parse(lsostukorv);
    }

    this.arvutaKogusumma();
  }

  lisaOstukorvi(toode: string) {
    this.ostukorviTooted.push(toode);
    localStorage.setItem("ostukorv", JSON.stringify(this.ostukorviTooted));
    this.arvutaKogusumma();
  }

  eemaldaOstukorvist(toode: string) {
    let index = this.ostukorviTooted.indexOf(toode);
    this.ostukorviTooted.splice(index, 1);
    this.arvutaKogusumma();
  }

tyhjenda() {
  this.ostukorviTooted = [];
  localStorage.setItem("ostukorv", JSON.stringify(this.ostukorviTooted));
  this.arvutaKogusumma();
}

arvutaKogusumma() {

this.kogusumma = 0;
this.ostukorviTooted.forEach(element => this.kogusumma = this.kogusumma + element.hind);

}

}
