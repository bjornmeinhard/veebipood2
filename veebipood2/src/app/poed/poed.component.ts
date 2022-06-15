import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poed',
  templateUrl: './poed.component.html',
  styleUrls: ['./poed.component.css']
})
export class PoedComponent implements OnInit {

  v2ljakuvatavKontakt = "";
  keskused = localStorage.getItem("Keskused");

  constructor() { }

  ngOnInit(): void {
  }

  v6taYhendust(telefoniNumber: string) {
    this.v2ljakuvatavKontakt = telefoniNumber;

  }

}
