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
  public deezer$?: Observable<any>;
  public fact$?: Observable<any>;

  constructor(
    private http: HttpClient
  ) {
    this.deezer$ = this.http.jsonp('https://api.deezer.com/artist/199' + '?output=jsonp&callback=ng_jsonp_callback_0', 'a')
    this.fact$ = this.http.get('https://catfact.ninja/fact');
  }

  a(b: any) {
    console.log(b)
  }

}
