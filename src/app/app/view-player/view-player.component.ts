import { Component, OnInit } from '@angular/core';
import { CricketService } from '../service/cricket-service.service';
import { Players } from '../model/Player';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.css']
})
export class ViewPlayerComponent implements OnInit {
  player: Players = new Players;
  constructor(private service : CricketService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getPlayer(id);
  }

  getPlayer(id:number){
    
    this.service.getPlayer(id).subscribe((res: any) => {
      this.player = res.player;
      console.log(this.player)
    }, err => {
      console.log(err);
    }    
    )
  }

}
