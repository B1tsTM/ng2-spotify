import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../models/artist';
import { Album } from '../models/album';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private location: Location) { }

  ngOnInit() { 
    this.route.params.map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
            //console.log('artist: ', this.artist);
          }, error => {
            console.error(error);
          })

          this.spotifyService.getAlbums(id)
          .subscribe(albums => {
            this.albums = albums.items;
            //console.log('albums: ', this.albums);
          }, error => {
            console.error(error);
          })
      }, error => console.error(error))
  }

  sanitize(url: string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
    }

    goBack() {
      this.location.back();
    }

}