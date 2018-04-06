import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  providers: [ArticleService]
})
export class ArticleDetailComponent implements OnInit {
  // articleId: string;
  articleId: number;

  articleToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.articleId = urlParameters['id'];

    // this.albums = this.albumService.getAlbums();
    });

this.articleToDisplay = this.articleService.getArticleById(this.articleId);

    // this.articleToDisplay = this.articleService.getArticleById(this.articleId);
    console.log(this.articleToDisplay);
    // this.albumToDisplay =  this.albums;

    // this.articleService.getArticleById(this.articleId).subscribe(dataLastEmittedFromObserver => {
      //  this.articleToDisplay = new Article(dataLastEmittedFromObserver.title,
      //                                   dataLastEmittedFromObserver.artist,
      //                                   dataLastEmittedFromObserver.description)
    // })


  }

  goToBackToTop() {
    this.router.navigate(['']);
    }

}
