import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../models/artist';
import { Album } from '../models/album';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-artist',
  templateUrl: 'app-artist.component.html',
  styleUrls: ['app-artist.component.css']
})
export class AppArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[]
  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute) { }

  ngOnInit() { 
    this.route.params.map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          })

          this.spotifyService.getAlbums(id)
          .subscribe(albums => {
            this.albums = albums.items;
          })
      })
  }


}