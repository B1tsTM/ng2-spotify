import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppSearchComponent } from './app-search/app-search.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppArtistComponent } from './app-artist/app-artist.component';
import { AppAlbumComponent } from './app-album/app-album.component';
import { AlbumResolver } from './app-album/album-resolver.service';
import { PageNotFoundComponent } from './errors/404.component';
import { RouteTo404GuardService } from './guards/route-to-404-guard.service';

const appRoutes : Routes = [
  {path: '', component: AppSearchComponent},
  {path: 'about', component: AppAboutComponent},
  {path: 'artist/:id', component: AppArtistComponent, canActivate: [RouteTo404GuardService]},
  // {path: 'album/:id', component: AppAlbumComponent, resolve: {album: AlbumResolver}},
  {path: 'album/:id', component: AppAlbumComponent},
  {path: '404', component: PageNotFoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);