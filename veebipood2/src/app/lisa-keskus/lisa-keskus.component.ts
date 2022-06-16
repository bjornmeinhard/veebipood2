import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-keskus',
  templateUrl: './lisa-keskus.component.html',
  styleUrls: ['./lisa-keskus.component.css']
})
export class LisaKeskusComponent implements OnInit {
  uusKeskus = "";

  constructor() { }

  ngOnInit(): void {
    let lsKeskused = localStorage.getItem("Keskus");
    
    if (lsKeskused !== null) {
      this.uusKeskus = JSON.parse(lsKeskused);
    }
  }

  sisestaKeskus() {
   

    let lsKeskused = localStorage.getItem("Keskus");
    let Keskused = [];
    if (lsKeskused !== null) {
      Keskused = JSON.parse(lsKeskused);
    }

    Keskused.push(this.uusKeskus);
    localStorage.setItem("Keskus", JSON.stringify(Keskused));
  }

}
