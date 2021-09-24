import {RouterModule, Routes} from "@angular/router";
import {ArticleComponent} from "./article/article.component";
import {NgModule} from "@angular/core";
import {FrontPageComponent} from "./front-page/front-page.component";
import {ArticleEditComponent} from "./article-edit/article-edit.component";

const routes: Routes = [
  { path: '', component: FrontPageComponent},
  { path: 'new', component: ArticleEditComponent},
  { path: ':id', component: ArticleComponent},
  { path: 'edit/:id', component: ArticleEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
