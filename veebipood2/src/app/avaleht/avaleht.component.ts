import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {
  s6naline = "Jutumärkide sees olev väärtus"; //toote nimi, kirjeldus, pildi url, kategooria, poe nimi, lahtioleku aeg
  postiindeks = "54132" // postiindeksid, isikukoodid, tel.n pannakse alati jutumärkide sisse, et mitte teha nendega arvutusi
  numbriline = 56; // toote hind, kõik mida saab arvutada, nt ostukorvi kokku arvutamine
  kahendV22rtus = false; //kas toode on aktiivne. Kas üks või teine. ehk true or false
  constructor() { }  //failide ühendamiseks
  // vasakul pool on Muutuja
  // paremal pool on Väärtus
  // keskel on võrdusmärk, väärtus liigub paremalt vasakule


  ngOnInit(): void { //käimapaneku funktsioon - kui minnakse selle lehe peale, 
    // pannakse selle funktsiooni sisu käima
    console.log("läksin avalehe componenti");
  }

  muudaS6nalineV22rtus() {
    console.log("muudetud sõnalise muutuja väärtust");
    this.s6naline ="Uus väärtus";
  }
  muudaS6nalineV22rtusTagasi() {
    console.log("muudetud sõnalise muutuja väärtust tagasi");
    this.s6naline ="Jutumärkide sees olev väärtust";
  }
  muudaNumbrilineV22rtus() {
    this.numbriline = 6543;
  }
  muudaNumbrilineV22rtusTagasi() {
    this.numbriline = 56;
  } // Funktsiooni kinni mineku loogeline sulg

  aktiivseks() {
    this.kahendV22rtus = true;

  }

  mitteaktiivseks() {
    this.kahendV22rtus = false;

  }

  korrutaNumbrilineKahega() {
    this.numbriline = this.numbriline * 2;
  }

  muudaAktiivset() {
    this.kahendV22rtus = !this.kahendV22rtus;
  }


  //salvestus
  //1.andmebaas
  //2.brauseri vahemällu
  //3.fail

} // Klassi kinni mineku loogeline sulg
