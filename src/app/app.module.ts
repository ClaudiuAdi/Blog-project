import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FrontPageComponent} from "./front-page/front-page.component";
import {ArticleComponent} from "./article/article.component";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDividerModule} from "@angular/material/divider";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ArticleEditComponent} from "./article-edit/article-edit.component";
import {ArticleService} from "./article/article.service";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatLineModule, MatRippleModule} from "@angular/material/core";
import {MatTooltipModule} from "@angular/material/tooltip";
import {CommentComponent} from "./comment/comment.component";
import {CommentService} from "./comment/comment.service";
import {CommentListComponent} from "./comment-list/comment-list.component";
import {ReplyComponent} from "./reply/reply.component";
import {ReplyListComponent} from "./reply-list/reply-list.component";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    ArticleComponent,
    ArticleEditComponent,
    CommentComponent,
    CommentListComponent,
    ReplyComponent,
    ReplyListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule,
    MatProgressBarModule,
    MatRippleModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatLineModule,
    MatExpansionModule

  ],
  providers: [ArticleService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
