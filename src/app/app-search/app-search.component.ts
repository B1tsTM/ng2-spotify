import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../models/artist';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'app-search.component.html',
  styleUrls: ['app-search.component.css']
})
export class AppSearchComponent implements OnInit {
  searchStr: string;
  searchResults: Artist[] = [];
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() { }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchResults = res.artists.items;
      },
      error => {
        console.error(error);
      });
  }
}