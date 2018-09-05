import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-by-country',
  templateUrl: './players-by-country.component.html',
  styleUrls: ['./players-by-country.component.css']
})
export class PlayersByCountryComponent implements OnInit {

  playersByCountry: any[] = [
    { "country": "Španija",
      "players": [
        {
          "name": "Rafael Nadal",
          "rank": 1
        }
      ]
    },
    { "country": "Srbija",
      "players": [
        {
          "name": "Novak Đoković",
          "rank": 6
        },        
        {
          "name": "Laslo Đere",
          "rank": 89
        }
      ]
    },
    { "country": "Švajcarska",
      "players": [
        {
          "name": "Rodžer Federer",
          "rank": 2
        },
        {
          "name": "Stan Vavrinka",
          "rank": 101
        }
      ]
    }    
  ] 

  constructor() { }

  ngOnInit() {
  }

}
