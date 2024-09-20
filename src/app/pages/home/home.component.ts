import { Component, OnInit, NgModule } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Video, YoutubeResponse } from '../../models/youtube.models';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [YoutubeService, CommonModule, HomeComponent],
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  videos: any = [];
  vis: Video[] = [];

  constructor(private youtubeService: YoutubeService){
    
  }

  ngOnInit(){
    this.youtubeService.getVideos()
    .subscribe( res =>  {
      
      this.videos = res;
    // this.videos.push(res);
     this.vis.push(this.videos);
      
      console.log("res:",res);
      console.log("videos:",this.videos);
      console.log("vis:",this.vis);
      console.log(this.videos[0].resourceId.videoId);
    });
  }

  mostrarVideo( video: Video){

    console.log(video);
    Swal.fire({
      html: `
        <iframe width="%100" 
                height="315" 
                src="https://www.youtube.com/embed/${ this.videos[0].resourceId.videoId }" 
                frameborder="0"
                allow="accelerometer;
                autoplay;
                gyroscope; 
                picture-in-picture" 
                allowfullscreen>
        <iframe>
      `
    })

  }

}
