import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from './comment.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit{
  private articleId: number;

  commentForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.articleId = this.route.snapshot.params.id;
    this.commentForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onCommentCancel() {
    this.commentForm.reset();
  }

  onSubmit() {
    const content = {
      id:0,
      name: this.commentForm.value.name,
      message: this.commentForm.value.message,
      articleId: this.articleId,
      commentId:0
    }

    this.commentService.addComment(content)
      .subscribe(()=>{});

    this.commentForm.setValue({name:'', message:''})
  }

}
