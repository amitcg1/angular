import { Component, OnInit } from '@angular/core';
import { Players } from '../model/Player';
import { CricketService } from '../service/cricket-service.service';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent implements OnInit {
  playerlist:Players[] = [];
  constructor(private service:CricketService) { }

  ngOnInit() {
    this.service.getPlayers().subscribe((res:any) => {
      this.playerlist = res.players;
      console.log(this.playerlist);
    })
  }

  deletePlayer(id:number){
    this.service.deletePlayer(id).subscribe((res:any)=>{
      alert("player deleted")
 
    }, (err) =>{
      console.log(err);
    })

    this.playerlist = this.playerlist.filter(item => item.id != id);
    console.log(this.playerlist)
  }
}
