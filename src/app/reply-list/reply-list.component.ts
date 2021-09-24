import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {CommentService} from "../comment/comment.service";
import {Comment} from "../shared/comment.model";

@Component({
  selector: 'app-reply-list',
  templateUrl: './reply-list.component.html'
})

export class ReplyListComponent implements OnInit {
  @Input('commentId') commentId: number;
  @Input('articleId') articleId: number;
  replies: Comment[];
  togglePanel: any = {};


  constructor(
    private replyService: CommentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.replyService.getComments(this.articleId)
      .subscribe((replyList: Comment[]) => {
        this.replies = replyList;
      });
  }

  onDeleteReply(id: number) {
    this.replyService.deleteComment(id, this.commentId).subscribe(()=>{});
  }
}
