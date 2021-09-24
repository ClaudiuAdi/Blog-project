import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../article/article.service";
import {Article} from "../shared/article.model";

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  new = false;
  form: FormGroup;
  private routeSub: Subscription | undefined;
  public article: Article;

  constructor(private apiConfigService: ArticleService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {

  }

  ngOnInit(): void {
    if (this.router.url !== '/new') {
      this.routeSub = this.route.params.subscribe(params => {
        this.apiConfigService.getOne(params['id']).subscribe((result: Article) => {
            this.article = result;
            this.form.patchValue({
                title: this.article.title,
                subTitle: this.article.subTitle,
                author: this.article.author,
                content: this.article.content,
              }
            );
          }, error => {
            this.new = true;
          }
        )
      });
    } else {
      this.new = true;
    }

    this.form = this.formBuilder.group({
        title: ['', Validators.required],
        subTitle: ['', Validators.required],
        author: ['', Validators.required],
        content: ['', Validators.required],
      }
    );

  }

  updateArticle() {
    this.apiConfigService.update({
        id: this.article.id,
        title: this.form.value.title,
        subTitle: this.form.value.subTitle,
        author: this.form.value.author,
        content: this.form.value.content,
      }
    ).subscribe(result => {
      this.router.navigateByUrl('')
    });
  }

  async postArticle() {
    await this.apiConfigService.create({
      id: null,
      title: this.form.value.title,
      subTitle: this.form.value.subTitle,
      author: this.form.value.author,
      content: this.form.value.content,
    }).subscribe(res => {
      this.router.navigateByUrl('')
    });

  }

  back(): void {
    window.history.back();
  }

}
