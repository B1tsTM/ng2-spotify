import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppSearchComponent } from './app-search/app-search.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppArtistComponent } from './app-artist/app-artist.component';
import { AppAlbumComponent } from './app-album/app-album.component';

const appRoutes : Routes = [
  {path: '', component: AppSearchComponent},
  {path: 'about', component: AppAboutComponent},
  {path: 'artist/:id', component: AppArtistComponent},
  {path: 'album/:id', component: AppAlbumComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);