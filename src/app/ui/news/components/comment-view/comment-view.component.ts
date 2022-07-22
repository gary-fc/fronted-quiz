import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../domain/models/comment/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.sass']
})
export class CommentViewComponent implements OnInit {

  @Input() comment?: Comment;

  constructor() {
  }

  ngOnInit(): void {
  }

}
