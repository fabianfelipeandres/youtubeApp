import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YoutubeResponse } from '../models/youtube.models';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class YoutubeService{

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyB7WwSwFHLvuFuzLrLeJrCi5HtAjY3stPU';
  private playlist = 'UUXyfpdqaxZAHv5B5nPBzlkw';


  constructor(private http: HttpClient) { }

  getVideos()
  {
    const url = `${ this.youtubeUrl }/playlistItems`;
    const urlp = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyB7WwSwFHLvuFuzLrLeJrCi5HtAjY3stPU&playlistId=UUXyfpdqaxZAHv5B5nPBzlkw'

        
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlist )
      .set('key', this.apikey );


    return this.http.get<YoutubeResponse>(urlp)
                    .pipe(
                      map(resp => {
                        return resp.items;
                      }),

                      map(items => items.map( video => video.snippet))
                      
                    )
  }

}
