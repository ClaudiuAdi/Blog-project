import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Article} from "../shared/article.model";
import {Observable} from "rxjs";

@Injectable()
export class ArticleService {
  API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.API_SERVER+'/articles');
  }

  public URL = '';

  public getOne(id: number) {
    this.URL = this.API_SERVER + '/articles/'
    this.URL += id;
    return this.httpClient.get<Article>(this.URL);
  }

  public create(article: Article) {
    return this.httpClient.post<Article>(`${this.API_SERVER}/articles`, article);
  }

  public update(article: Article) {
    return this.httpClient.put<Article>(`${this.API_SERVER}/articles`, article);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.API_SERVER}/articles/${id}`);
  }

}
