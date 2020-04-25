import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-search',
  templateUrl: './view-search.component.html',
  styleUrls: ['./view-search.component.css']
})
export class ViewSearchComponent implements OnInit {
  userName : string = "";
  response: any;
  constructor(private http: HttpClient) { 

  }
  search(){
   // console.log(this.userName)
    this.http.get('https://api.github.com/users/'+this.userName).subscribe((response) => {
      this.response = response
    console.log(response)
    });
  }
  ngOnInit() {
  }

}