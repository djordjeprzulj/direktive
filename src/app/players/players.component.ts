import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any[] = [
    {
      "name": "Novak Đoković",
      "rank": 6,
      "country": "Srbija"
    },
    {
      "name": "Rafael Nadal",
      "rank": 1,
      "country": "Španija"
    },
    {
      "name": "Rodžer Federer",
      "rank": 2,
      "country": "Švajcarska"
    },
    {
      "name": "Laslo Đere",
      "rank": 89,
      "country": "Srbija"
    },
    {
      "name": "Stan Vavrinka",
      "rank": 101,
      "country": "Švajcarska"
    }
  ] 

  constructor() { }

  ngOnInit() {
  }

  getColor(country) {
    switch(country) {
      case 'Srbija': return 'red';
      case 'Švajcarska': return 'blue';
      default: return 'green';
    }
  }
}
