import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { ViewPlayerComponent } from './view-player/view-player.component';
import { ViewPlayersComponent } from './view-players/view-players.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule }     from './app-routing.modules';
import { CricketService } from './service/cricket-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddPlayerComponent,
    DeletePlayerComponent,
    ViewPlayerComponent,
    ViewPlayersComponent,
    UpdatePlayerComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    NgbModule.forRoot(),   
    FormsModule
  ],
  providers: [CricketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
