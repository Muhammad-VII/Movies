import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

const routes: Routes = [
  {path: ``, redirectTo:`home`, pathMatch: `full`},
  {path: `home`, component: HomeComponent},
  {path: `about`, component: AboutComponent},
  {path: `movies`, component: MoviesComponent},
  {path: `network`, component: NetworkComponent},
  {path: `people`, component: PeopleComponent},
  {path: `tvshows`, component: TvshowsComponent},
  {path: `login`, component: SigninComponent},
  {path: `register`, component: RegisterComponent},
  {path: `**`, component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
