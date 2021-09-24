import {HttpClient} from "@angular/common/http";
import {Comment} from "../shared/comment.model";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable()
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }
  API_SERVER = "http://localhost:3000";

  private _refreshNeeded = new Subject<void>();

  get refreshNeeded() {
    return this._refreshNeeded;
  }

  public addComment(comment: Comment)
  {
    return this.httpClient.post<Comment>(`${this.API_SERVER}/comments/${comment.articleId}`, comment)
      .pipe(
        tap(()=> {
          this._refreshNeeded.next();
        })
      );
  }
  public getComments(articleId:number){
    return this.httpClient.get<Comment[]>(`${this.API_SERVER}/comments/${articleId}`);
  }

  public deleteComment(commentId:number, articleId:number){
    return this.httpClient.delete(`${this.API_SERVER}/comments/${articleId}/${commentId}`);
  }
}
