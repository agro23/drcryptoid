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
  articleId: string;
  articleToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.articleId = urlParameters['id'];
  });

  this.articleToDisplay = this.articleService.getArticleById(this.articleId);
  console.log(this.articleToDisplay);

    this.articleService.getArticleById(this.articleId).subscribe(dataLastEmittedFromObserver => {
       this.articleToDisplay = new Article(dataLastEmittedFromObserver.id,
                                        dataLastEmittedFromObserver.name,
                                        dataLastEmittedFromObserver.author,
                                        dataLastEmittedFromObserver.level,
                                        dataLastEmittedFromObserver.rights,
                                        dataLastEmittedFromObserver.uploadDate,
                                       dataLastEmittedFromObserver.articleHeader,
                                       dataLastEmittedFromObserver.lede,
                                       dataLastEmittedFromObserver.bodyCopy,
                                       dataLastEmittedFromObserver.link,
                                       dataLastEmittedFromObserver.keywords,
                                       dataLastEmittedFromObserver.comments,
                                       dataLastEmittedFromObserver.upvotes,
                                       dataLastEmittedFromObserver.downvotes,
                                       dataLastEmittedFromObserver.target
                                      )
    })
  }

  goBackToTop() {
    this.router.navigate(['']);
    }

}
