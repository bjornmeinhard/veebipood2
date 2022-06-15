import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {
  uusToode = "";

  constructor() { }

  ngOnInit(): void {
  }

  sisestaToode() {
    localStorage.setItem("toode", this.uusToode);

    let lsTooted = localStorage.getItem("tooted");
    let tooted = [];
    if (lsTooted !== null) {
      tooted = JSON.parse(lsTooted);
    }

    tooted.push(this.uusToode);
    localStorage.setItem("tooted", JSON.stringify(tooted));
  }
}