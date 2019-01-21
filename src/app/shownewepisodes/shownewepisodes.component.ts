import { Component, OnInit } from '@angular/core';
import { NewepisodeService } from '../newepisode.service';

@Component({
  selector: 'app-shownewepisodes',
  templateUrl: './shownewepisodes.component.html',
  styleUrls: ['./shownewepisodes.component.css']
})
export class ShownewepisodesComponent implements OnInit {

    text: string;
    shows: string[];

  constructor(public newEpisode: NewepisodeService) { }

  ngOnInit() {
      this.showEpisode();
  }

  public showEpisode() {
      this.newEpisode.getEpisodePage('sword-art-online')
      .subscribe((response) => {
        this.text = response;
        console.log(this.text);
        const re = /a href=\"\/sword-art-online\/episode-\d+/g;
        this.shows = this.text.match(re);
      if (this.shows.length > 0 ) {
    console.log('match');
    console.log(this.shows.length);
    console.log(this.shows[0]);
      }
      });
  }

}
