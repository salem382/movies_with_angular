import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponentComponent } from './movies-component/movies-component.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { NetworkComponent } from './network/network.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',canActivate:[authGuard], component:HomeComponent},
  {path:'movies', component:MoviesComponentComponent},
  {path:'tvshow', component:TvShowComponent},
  {path:'people', component:PeopleComponent},
  {path:'about', component:AboutComponent},
  {path:'networks', component:NetworkComponent},
  {path:'register', component:RegisterComponent},
  {
    path: 'settings',
    loadChildren: () => import('./setting2/setting2.module').then(m => m.Setting2Module)
  },
  {path:'login', component:LoginComponent},
  {path:'movieDetails/:id', component:MovieDetailsComponent},
  {path:'**', component:NotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
