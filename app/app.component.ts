import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  users: any;
  constructor(public http : HttpClient){
    this.http.get('http://localhost:5000/users').subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }
}



