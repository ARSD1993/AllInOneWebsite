import { Component, OnInit } from '@angular/core';
import { NewepisodeService } from '../newepisode.service';
import { GetscoreService } from '../getscore.service';
import { Episode } from '../episode';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})

export class ShowdataComponent implements OnInit {

    text: string;
    shows: Episode[];

    score: string;

    size: number;

  constructor(public newEpisode: NewepisodeService, public getScore: GetscoreService) { }

  ngOnInit() {
  }

  public showScore() {
      this.getScore.getScore()
      .subscribe((response) => {
        // const re = /a href=\"\/sword-art-online\/episode-\d+/g;
        // this.shows = this.text.match(re);
    //   if (this.shows.length > 0 ) {
    // console.log('match');
    // console.log(this.shows.length);
    // console.log(this.shows[0]);
    //   }
    this.score = response;
      });
  }

}
