import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Injectable()

//export class AlbumResolver implements Resolve<any> {
export class AlbumResolver {
  constructor(private spotifyService: SpotifyService
              ) {
              }
  resolve(route: ActivatedRoute) {
    console.log(route);
     return this.spotifyService.getAlbum(route.params['id'])
      .subscribe(album => {
        return album;
      })

    // return route.params.map(params => params['id'])
    //   .subscribe((id) => {
    //     this.spotifyService.getAlbum(id)
    //       .subscribe(album => {
    //         return album;
    //       })

    //   })
  }
}
