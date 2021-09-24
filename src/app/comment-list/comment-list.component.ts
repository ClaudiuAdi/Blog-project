import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../comment/comment.service";
import {Comment} from "../shared/comment.model";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  articleId: number;
  comments: Comment[];
  // showReply = false;
  togglePanel: any = {};

  private updateSubscription: Subscription;

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.commentService.refreshNeeded
      .subscribe(()=>{
        this.commentService.getComments(this.articleId)
        .subscribe((commentList)=>{
          this.comments = commentList
        })
        }
      );

    this.articleId = this.route.snapshot.params.id;
    this.commentService.getComments(this.articleId)
      .subscribe((commentList)=>{this.comments = commentList});
  }

  onDeleteComment(id: number) {
    this.commentService.deleteComment(id, this.articleId)
      .subscribe(()=>{
        this.commentService.getComments(this.articleId)
          .subscribe((commentList)=>{
            this.comments = commentList
          })
      });
  }

  // onReply(){
  //   this.showReply = (!this.showReply) ? true : false;
  // }

}
