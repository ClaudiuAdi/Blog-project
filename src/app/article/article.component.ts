import {Component, OnInit} from '@angular/core';
import {Article} from "../shared/article.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ArticleService} from "./article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit{

  constructor(private apiConfigService: ArticleService,
              private route: ActivatedRoute,
              private router: Router
  ) {}

  private routeSub: Subscription | undefined ;
  public article : Article | undefined;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {

      this.apiConfigService.getOne(params['id']).subscribe((result: Article) => {
          this.article = result;
        }
      )
    });
  }

  back():void {
    this.router.navigateByUrl('');
  }
}
