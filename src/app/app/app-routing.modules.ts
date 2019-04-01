import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { ViewPlayerComponent } from './view-player/view-player.component';
import { ViewPlayersComponent } from './view-players/view-players.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';

const routes: Routes = [
{
path: '',
component: HomeComponent
},

{
    path: 'add',
    component: AddPlayerComponent
},

{
    path: 'view/:id',
    component: ViewPlayerComponent
},

{
    path: 'viewall',
    component: ViewPlayersComponent
},

{
    path: 'update',
    component: UpdatePlayerComponent
},

{
    path: 'delete',
    component: DeletePlayerComponent
},
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }