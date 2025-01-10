import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SpotifyAlbum } from '../interfaces/spotifyAlbum';
import { Album } from '../interfaces/album';
import { randomInt } from 'node:crypto';

interface State {
  loading: boolean
  albums: Album[]
}

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {
  private http = inject(HttpClient);
  private apuUrl = 'https://api.com/album'

  public getAlbum(id: string): Observable<SpotifyAlbum> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer {}`
    });
    
    return this.http.get<SpotifyAlbum>(`https://api.spotify.com/v1/albums/${id}`, { headers }).pipe(
      tap( response => {
       const albumResponse: Album = {
        id: id,
        name: response.name,
        artist: response.artists[0].name,
        price: randomInt(30, 20),
        cover: response.images[0].url,
        genre: response.genres[0],
        rating: response.popularity,
        about: response.label
       }
       return albumResponse 
      })
    );
  }
}
