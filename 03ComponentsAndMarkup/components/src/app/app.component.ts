

import { Component, OnInit } from '@angular/core';
import { seed } from '../../seed';


@Component({
  selector: 'com-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  data;
  selectedArticle;
  
  ngOnInit(): void {
    this.data = seed;
  }

  getDetails(targetId){
    this.selectedArticle = this.data.find(x=>x.id === targetId);
  }

  deleteArticle(articleId){
    this.data = this.data.filter(x=>x.id !== articleId);
    this.selectedArticle = null;
  }
}
