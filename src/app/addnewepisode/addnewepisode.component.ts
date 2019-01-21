import { Component, OnInit } from '@angular/core';
import { NewepisodeService } from '../newepisode.service';

@Component({
  selector: 'app-addnewepisode',
  templateUrl: './addnewepisode.component.html',
  styleUrls: ['./addnewepisode.component.css']
})
export class AddnewepisodeComponent implements OnInit {

    episodeName: string;

  constructor(public episodeService: NewepisodeService) { }

  ngOnInit() {
  }

  public addEpisode(): void {
    this.episodeService.addNewEpisode(this.episodeName);
}

}
