import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';

@Injectable()
export class RouteTo404GuardService implements CanActivate {
  constructor(private spotifyService: SpotifyService,
              private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    return this.spotifyService.getArtist(route.params['id'])
      .map(response => {
        if (response.error) {
          this.router.navigate(['/404']);
        }
        return true;
      })
      .catch(err => {
        return this.router.navigate(['/404'])
      })
  }
}
