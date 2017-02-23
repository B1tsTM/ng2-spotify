import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ToastrService } from '../services/toastr.service';
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
  
  constructor(private spotifyService: SpotifyService,
              private toastr: ToastrService) { }

  ngOnInit() { }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchResults = res.artists.items;
      },
      error => {
        this.toastr.error('Error occurred!', 'Error!')
      });

  }

  doNothing() {}
}