import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { TrendingComponent } from './components/trending/trending.component';
import { PlayingnowComponent } from './components/playingnow/playingnow.component';
import { PopularComponent } from './components/popular/popular.component';
import { TopratedComponent } from './components/toprated/toprated.component';
import { TvseriesComponent } from './components/tvseries/tvseries.component';
import { ActorsComponent } from './components/actors/actors.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetmovieComponent } from './components/getmovie/getmovie.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MylistComponent } from './components/mylist/mylist.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpcomingComponent,
    TrendingComponent,
    PlayingnowComponent,
    PopularComponent,
    TopratedComponent,
    TvseriesComponent,
    ActorsComponent,
    FooterComponent,
    GetmovieComponent,
    HomeComponent,
    NavbarComponent,
    MylistComponent,
    TvShowComponent,
    AllMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
