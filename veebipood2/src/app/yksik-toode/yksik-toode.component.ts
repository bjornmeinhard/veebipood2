import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yksik-toode',
  templateUrl: './yksik-toode.component.html',
  styleUrls: ['./yksik-toode.component.css']
})
export class YksikToodeComponent implements OnInit {
  // tooteNimi = "";
  leitudToode: any;

  constructor() { }

  ngOnInit(): void {

let tooteNimi = window.location.href.split("toode/")[1];
let tooted = [];
let lsTooted = localStorage.getItem("tooted");
    
    if (lsTooted !== null) {
      tooted = JSON.parse(lsTooted); 
    }
   
    this.leitudToode = tooted.find((element:any) => 
    element.nimi.toLowerCase().replaceAll(' ','-') === tooteNimi);

  }

}
