import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Episode } from './episode';

const HOST_URL = 'https://www.crunchyroll.com/';

// that-time-i-got-reincarnated-as-a-slime
// sword-art-online

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})

export class NewepisodeService {
    addNewEpisode(seriesName: string): void {
      const sourceSeriesName = seriesName.toLowerCase().replace(new RegExp('\\s', 'g'), '-');
      console.log(sourceSeriesName);
      const seriesList: Object = this.getSeriesList();
      if (!seriesList.hasOwnProperty(sourceSeriesName)) {
      this.getEpisodePage(sourceSeriesName).subscribe((response) => {
        const text = response;
        const regEpisodeUrl = new RegExp('a href=\"\/' + sourceSeriesName + '\/episode-\\d+.*', 'g');
        const regEpisodeNumber = new RegExp('episode-\\d+-(.*)-\\d+.*title=\\"(.*)\\"', 'g');
        const showsUrl = text.match(regEpisodeUrl);
        let currentEpisodeNum = 0;
        const episodeNumber1 = /(\d+)/g;
        let test = regEpisodeNumber.exec(text);
        const episodeName = [];
        while (test !== null) {
            episodeName.push(test[2] + ': ' + test[1]);
            test = regEpisodeNumber.exec(text);
        }
        let episodeList = [];
        for (let i = 0; i < showsUrl.length; i++) {
            const found1 = episodeName[i].match(episodeNumber1);
            if (currentEpisodeNum !== 0 && currentEpisodeNum < +found1[0]) {
                currentEpisodeNum = i;
                break;
            }
            episodeList.push(new Episode(episodeName[i], false, seriesName));
            currentEpisodeNum = +found1[0];
        }
        if (currentEpisodeNum === 1) {
          currentEpisodeNum = showsUrl.length;
        }
        episodeList = episodeList.slice(0, currentEpisodeNum);
        this.setList(episodeList, seriesName);
      });
    } else {
        alert('Series ' + seriesName + ' already collected');
      }
    }

    public getSeriesList(): Object {
      const seriesList = JSON.parse(localStorage.getItem('series'));
      return seriesList == null ? {} : seriesList;
    }

    private setList(episodeList: Episode[], seriesName: string): void {
        const obj = localStorage.getItem('series');
        if (obj === null) {
            const newArray = [];
            const newObj = {[seriesName]: episodeList};
            newArray.push(newObj);
            localStorage.setItem('series', JSON.stringify(newArray));
        } else {
            const array = JSON.parse(obj);
            const newObj = {[seriesName]: episodeList};
            array.push(newObj);
            localStorage.setItem('series', JSON.stringify(array));
        }
    }

  constructor(private http: HttpClient) { }

  public getEpisodePage(seriesName: string) {
      const headers = new HttpHeaders();
    headers.append('accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8');
    headers.append('user-agent', 'Mozilla/5.0' +
    '(Windows NT 10.0; Win64; x64) AppleWebKit/537.36' +
    '(KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36');
    console.log(PROXY_URL + HOST_URL + seriesName);
    return this.http.get(PROXY_URL + HOST_URL + seriesName,
    {headers: headers, responseType: 'text', }).pipe(
        tap(_ => this.log('getting web info for ' + HOST_URL + seriesName)),
        catchError(this.handleError('getAnime', ''))
    );
  }

  public haveSeen(episodeName: string, seriesName: string): void {
    const seriesList = this.getSeriesList();
      for (const key in seriesList) {
        if (seriesList.hasOwnProperty(key)) {
         const value = seriesList[key];
         if (value.hasOwnProperty(seriesName)) {
           const episodeArray: Episode[] = value[seriesName];
           const index = episodeArray.findIndex((episode) => episode.episodeName === episodeName);
           if (episodeArray[index].haveSeen === false) {
             episodeArray[index].haveSeen = true;
           } else {
             episodeArray[index].haveSeen = false;
           }
           break;
         }
      }
  }
  localStorage.setItem('series', JSON.stringify(seriesList));
}

    private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
    };
    }

    private log(message: string) {
        console.log(`getEpisode failed : ${message}`);
    }

}
