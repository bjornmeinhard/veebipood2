import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  ostukorviTooted:string[] = [];

  constructor() { }

  ngOnInit(): void {
    let lsostukorv = localStorage.getItem("ostukorv");
    
    if (lsostukorv !== null) {
      this.ostukorviTooted = JSON.parse(lsostukorv);
    }
  }

  lisaOstukorvi(toode: string) {
    this.ostukorviTooted.push(toode);
    localStorage.setItem("ostukorv", JSON.stringify(this.ostukorviTooted));
  }

  eemaldaOstukorvist(toode: string) {
    let index = this.ostukorviTooted.indexOf(toode);
    this.ostukorviTooted.splice(index, 1);
  }

tyhjenda() {
  this.ostukorviTooted = [];
  localStorage.setItem("ostukorv", JSON.stringify(this.ostukorviTooted));
}

}
