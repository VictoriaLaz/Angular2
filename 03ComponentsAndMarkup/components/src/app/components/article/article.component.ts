import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'com-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {
  @Input() article;
  @Output() articleId: EventEmitter<number> = new EventEmitter();  
  counter:number = 0;
  limit = 0;
  hide = false;
  displayImage = false;
  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.counter = 0;
    this.limit = 0;
    this.hide = false;
    this.displayImage = true;
  }

  trunc(string){
    return string.slice(0, this.counter*250)
  }

  readMore(){
    this.limit = Math.ceil(this.article.text.length/250); 
    this.counter = this.counter +1;
    if(this.counter===this.limit){
      this.hide = true;
    }
  }
  hideText(){
    this.hide = false;
    this.counter = 0;
  }
  toggleImage(){
    this.displayImage = !this.displayImage;
  }

  deleteArticle(targetId){
    this.articleId.emit(targetId);
  }
}
