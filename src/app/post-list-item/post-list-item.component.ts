import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  @Input() postTitle: string ;
  @Input() postContent: string ;
  @Input() postLoveIts: number ;
  @Input() postDate: Date ;

  lastUpdate = new Date();

  increaseLoveIts() {
    this.postLoveIts ++ ;
  }

  decreaseLoveIts() {
    this.postLoveIts -- ;
  }

  ngOnInit() {
  }

}
