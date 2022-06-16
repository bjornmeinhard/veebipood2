import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poed',
  templateUrl: './poed.component.html',
  styleUrls: ['./poed.component.css']
})
export class PoedComponent implements OnInit {

  v2ljakuvatavKontakt: any;
  
  keskused = [{nimi: 'Kristiine', tel: '5197643', aadress: 'Tammsaare tee'},
{nimi: 'Helsinki', tel: '+123456789', aadress: 'Mökki Tee'},
{nimi: 'Mustamäe', tel: '+12345678', aadress: 'Linnu Tee'},
]

  //ostukorviTooted:string[] = [];

  constructor() { }

  ngOnInit(): void {
    // let lsostukorv = localStorage.getItem("ostukorv");
    
    // if (lsostukorv !== null) {
    //   this.ostukorviTooted = JSON.parse(lsostukorv);
    // }
  }

  v6taYhendust(keskus: any) {
    this.v2ljakuvatavKontakt = keskus;
    

  }

}
