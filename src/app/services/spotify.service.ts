import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;

  constructor(private http: Http) { }

  searchMusic(input: string, type='artist') {
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+input+'&offset=0&limit=20&type='+type+'&market=US';
    return this.http.get(this.searchUrl)
      .map(res => res.json());
  }

  searchAlbums(input: string, type='artist') {
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+input+'&offset=0&limit=20&type='+type+'&market=US';
    return this.http.get(this.searchUrl)
      .map(res => res.json());
  }

  getArtist(id: string) {
    this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
    return this.http.get(this.artistUrl)
      .map(res => res.json());
  }

  getAlbums(albumId: string) {
    this.albumsUrl = 'https://api.spotify.com/v1/artists/'+albumId+'/albums';
    return this.http.get(this.albumsUrl)
      .map(res => res.json());
  }

  getAlbum(albumId: string) {
    this.albumUrl = 'https://api.spotify.com/v1/albums/'+albumId;
    return this.http.get(this.albumUrl)
      .map(res => res.json());
  }

  getVisitorsCountry() {
    return this.http.get('https://ipinfo.io')
      .map(res => JSON.parse(res['_body']))
  }

}