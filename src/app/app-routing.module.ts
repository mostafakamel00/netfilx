import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { MylistComponent } from './components/mylist/mylist.component';
import { HomeComponent } from './components/home/home.component';
import { GetmovieComponent } from './components/getmovie/getmovie.component';
import { ActorsComponent } from './components/actors/actors.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'get/:id',
    component: GetmovieComponent,
  },
  {
    path: 'mylist',
    component: MylistComponent,
  },
  {
    path: 'tv-show',
    component: TvShowComponent,
  },
  {
    path: 'all-movies',
    component: AllMoviesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
