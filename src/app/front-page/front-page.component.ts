import {Component, Input, OnInit} from "@angular/core";
import {ArticleService} from "../article/article.service";
import {Router} from "@angular/router";
import {Article} from "../shared/article.model";
import {finalize} from "rxjs/operators";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class FrontPageComponent implements OnInit {
  private updateSubscription: Subscription;
  deleteAction: boolean = false;

  constructor(private apiConfigService: ArticleService, private router: Router) {}

  articles: Article[] = []
  isLoading: false;
  public displayedColumns: string[] = ['id', 'title', 'subTitle', 'author'];
  expandedElement: Article | null;

  ngOnInit(): void {
    this.apiConfigService.getAll()
      .pipe(finalize(()=> this.isLoading = false))
      .subscribe((result: Article[]) => {
      this.articles = result;
    });
  }

  getAllArticles() {
    this.apiConfigService.getAll().subscribe((result) => {
      this.articles = result;
    });
  }

  getOneArticle(id: number)
  {
    const url='/'+id;
    this.router.navigateByUrl(url).then(() => {});
  }

  editArticle(id: number)
  {
    const url='/edit/'+id;
    this.router.navigateByUrl(url).then(() => {});
  }

  createNewArticle()
  {
    this.router.navigateByUrl('/new').then(() => {});
  }

  deleteArticle(id: number){
    this.apiConfigService.delete(id).subscribe(
      ()=>{this.getAllArticles();
      }
    )
  }

}
