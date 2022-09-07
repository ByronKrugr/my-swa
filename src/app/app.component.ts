import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-swa';
  public deezerWorking$?: Observable<any>;
  public deezerNotWorking$?: Observable<any>;
  public fact$?: Observable<any>;

  constructor(
    private http: HttpClient
  ) {
    this.deezerWorking$ = this.http.jsonp('https://api.deezer.com/artist/199' + '?output=jsonp&callback=ng_jsonp_callback_0', 'a')
    this.deezerNotWorking$ = this.http.jsonp('http://api.deezer.com/search/album?q=' + 'eminem' + '&output=jsonp&callback=ng_jsonp_callback_1', 'JSONP_CALLBACK');
    this.fact$ = this.http.get('https://catfact.ninja/fact');
  }

  a(b: any) {
    console.log(b)
  }

}
