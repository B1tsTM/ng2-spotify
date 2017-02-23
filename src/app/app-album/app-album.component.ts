import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../models/artist';
import { Album } from '../models/album';

@Component({
  moduleId: module.id,
  selector: 'app-album',
  templateUrl: 'app-album.component.html',
  styleUrls: ['app-album.component.css']
})
export class AppAlbumComponent implements OnInit {
  id: string;
  album: Album[];
  country: string;
  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.spotifyService.getVisitorsCountry()
      .subscribe(res => {
        this.country = res.country;
        //console.log(this.country);
      })
    this.route.params.map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
            //console.log('album: ', this.album);
          })

      })

    //  this.album = this.route.snapshot.data['album'];
   }

   sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  
  checkAvailability(countries: any[]) {
    let isAvailable: boolean = false;

    countries.forEach(country => {
      if (country == this.country) {
        isAvailable = true;
      }
    })
    return isAvailable;

  }

}