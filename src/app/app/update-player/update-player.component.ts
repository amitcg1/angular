import { Component, OnInit } from '@angular/core';
import { Players } from '../model/Player';
import { CricketService } from '../service/cricket-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {
  playerList: Players [] = [];
  playerSelected: boolean = false;
  player: Players = new Players;
  dropdownPlayer: Players [] = [];
  isUpdatePlayerClicked: boolean = false;
  
  constructor(private service: CricketService, private router : Router) { }

  ngOnInit() {
    this.service.getPlayers().subscribe((res:any) => {
      this.playerList = res.players;
    })
  }

  onChange(id:number){
    this.playerSelected = false;
   this.dropdownPlayer = this.playerList.filter(item => item.id == id);
   console.log("length is"+this.dropdownPlayer.length)    
   this.player = this.dropdownPlayer[0];
   if(this.dropdownPlayer.length == 1){
   this.playerSelected = true;  
  }
  }

  showPlayerInfoToUpdate(id:number){
    this.playerSelected = false; 
    this.isUpdatePlayerClicked = true;
  }

  updatePlayer(player:Players){
    this.service.updatePlayer(player.id, player).subscribe((res: any) => {
      console.log(this.player.id+this.player.name);
      alert("player details updated")
      this.router.navigate(['/viewall']);
    }, err=>{
      console.log(err);
    });

  }

}
