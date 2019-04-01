import { Component, OnInit } from '@angular/core';
import { Players } from '../model/Player';
import { CricketService } from '../service/cricket-service.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player:Players = new Players;
  constructor(private service:CricketService) { }

  ngOnInit() {
  }
  createPlayer(player:Players){
    this.service.createPlayer(this.player).subscribe((res:any) =>{
      console.log(res);
      alert('created record successfully ');
    }, (err) => {
      console.log(err),
      alert("error adding data");
    })

  }

}
