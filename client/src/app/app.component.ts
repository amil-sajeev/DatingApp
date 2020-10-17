import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  public users;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.http.get('https://localhost:5001/api/Users').subscribe(data => {
      this.users = data;
    },
      err => {
        console.log("something went wrong" + err)
      });
  }
}
