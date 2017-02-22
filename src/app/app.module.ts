import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppSearchComponent } from './app-search/app-search.component';
import { AppArtistComponent } from './app-artist/app-artist.component';
import { AppAlbumComponent } from './app-album/app-album.component';
import { routing } from './app.routing';
import { SpotifyService } from './services/spotify.service';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [ AppComponent, AppNavbarComponent, AppAboutComponent, 
                  AppSearchComponent, AppArtistComponent, AppAlbumComponent ],
  providers:    [ SpotifyService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
