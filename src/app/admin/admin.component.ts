import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticleService]
})

export class AdminComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  public selectedArticle: Article;

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  ngOnDestroy() {
    console.log("on destroy selectedArticle = " + this.selectedArticle.name);
    this.articleService.selectedArticle = this.selectedArticle;
    console.log("OnDestroy this.articleService.selectedArticle = " + this.articleService.selectedArticle.name);
  }

  addArticles() {
    this.router.navigate(['add-article']);
    }

  editArticles(selectedArticle) {
    this.selectedArticle = selectedArticle;
    console.log ("key is: " + selectedArticle.$key);
    // this.articleService.selectedArticle = this.articleService.getArticleById(selectedArticle.$key);
    this.router.navigate(['edit-article']);
    }

  beginDeletingArticle(articleToDelete){
      if(confirm("Are you sure you want to delete this article from the db?")){
        this.articleService.deleteArticle(articleToDelete);
      }
    }

    // goToDetailPage(clickedArticle) {
    //   this.router.navigate(['articles', clickedArticle.$key]);   "article" is from the ngFor
    // }

  returnToTopPage() {
    this.router.navigate(['']);
    }


}
