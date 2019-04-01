import { Component, OnInit } from '@angular/core';
import { Players } from '../model/Player';
import { CricketService } from '../service/cricket-service.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-view-players',
  templateUrl: './view-players.component.html',
  styleUrls: ['./view-players.component.css']
})
export class ViewPlayersComponent implements OnInit {
  players: Players[];
  service3:CricketService;
  constructor(private service:CricketService,private service1:CricketService, private router: Router ) { }

  ngOnInit() {
    this.getAllPlayers();
  }
  getAllPlayers () {
    this.service.getPlayers().subscribe((res:any) => {
      this.players = res.players;
      console.log(this.players)
    }, err => {
      console.log(err)
    }
    )
  }
  
}
