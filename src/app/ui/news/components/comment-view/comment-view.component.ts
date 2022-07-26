import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../domain/models/comment/Comment';
import {CommentResponse} from '../../../../domain/models/comment/CommentResponse';

@Component({
  selector: 'app-comment',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.sass']
})
export class CommentViewComponent implements OnInit {

  @Input() comment?: CommentResponse;

  constructor() {
  }

  ngOnInit(): void {
  }

}
