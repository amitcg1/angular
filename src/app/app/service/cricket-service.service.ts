import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Players } from '../model/Player';

@Injectable({
  providedIn: 'root'
})
export class CricketService {
  private baseUrl = "http://localhost:3030/cricket/api";
  constructor(private http: HttpClient) {}

  getPlayers () {
    return this.http.get(`${this.baseUrl}/players`);
  }


  getPlayer (id: number) {
    return this.http.get(`${this.baseUrl}/players/${id}`);
  }

  createPlayer (player: Players) {
    return this.http.post(`${this.baseUrl}/players/`,player);
  }

  deletePlayer (id: number) {
    return this.http.delete(`${this.baseUrl}/players/${id}`);
  }

  updatePlayer(id: number,player: Players){
    console.log("id is -->"+id);
    console.log("player name is -->"+player);
    return this.http.patch(`${this.baseUrl}/players/${id}`,player)
  }
}
