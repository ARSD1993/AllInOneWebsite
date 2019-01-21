import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const HOST_URL = 'http://www.espn.com/';

const SOURCE_URL = '/soccer/scoreboard';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class GetscoreService {

  constructor(private http: HttpClient) { }

    public getScore() {
    const headers = new HttpHeaders();
    headers.append('accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8');
    headers.append('user-agent', 'Mozilla/5.0' +
    '(Windows NT 10.0; Win64; x64) AppleWebKit/537.36' +
    '(KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36');
    console.log(PROXY_URL + HOST_URL + SOURCE_URL);
    return this.http.get(PROXY_URL + HOST_URL + SOURCE_URL,
    {headers: headers, responseType: 'text', }).pipe(
        tap(_ => this.log('getting web info for ' + HOST_URL + SOURCE_URL)),
        catchError(this.handleError('getAnime', ''))
    );
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
