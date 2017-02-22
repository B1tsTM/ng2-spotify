import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          })

      })
   }
}