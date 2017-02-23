import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ToastrService } from '../services/toastr.service';
import { Artist } from '../models/artist';

@Component({
  moduleId: module.id,
  selector: 'app-404',
  templateUrl: '404.component.html',
  styleUrls: ['404.component.css']
})
export class PageNotFoundComponent implements OnInit {
  constructor(private spotifyService: SpotifyService,
              private toastr: ToastrService) { }

  ngOnInit() { }

}