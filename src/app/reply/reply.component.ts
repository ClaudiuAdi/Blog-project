import {Component, Input, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../comment/comment.service";

@Component({
  selector: 'app-reply-form',
  templateUrl: './reply.component.html'
})

export class ReplyComponent implements OnInit {
  @Output('repCancel') repCancel: boolean;
  @Input('commentId') commentId: number;
  @Input('replyId') replyId: string;
  @Input('articleId') articleId: number;
  replyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private replayService: CommentService
  ) {}


  ngOnInit() {

    this.replyForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get cId() {
    return this.commentId;
  }

  get rId() {
    return this.replyId;
  }

  onSubmit() {
    const submittedVal = {
      id: 0,
      name: this.replyForm.value.name,
      message: this.replyForm.value.message,
      commentId: this.commentId,
      articleId: this.articleId
    }

    this.replayService.addComment(submittedVal).subscribe((reply)=>{});
  }
}
