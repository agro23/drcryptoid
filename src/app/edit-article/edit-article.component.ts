import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from './../models/article.model';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
  providers: [ArticleService]
})

export class EditArticleComponent implements OnInit {
  articleId: string;
  selectedArticle;
  // @Input() selectedArticle;
  // @Output() selectedArticle;
  // selectedArticle: Article;

  constructor(private route: ActivatedRoute, private location: Location, private articleService: ArticleService, private router: Router){}

  ngOnInit() {
    // this.selectedArticle = this.articleService.selectedArticle;
    // console.log("this.articleService.selectedArticle = " + this.articleService.selectedArticle);
    // console.log("selectedArticle = " + this.selectedArticle);

    this.route.params.forEach(
      (urlParameters) => {
      this.articleId = urlParameters['id'];
    });

  // this.selectedArticle = this.articleService.getArticleById(this.articleId);
  //   console.log(this.selectedArticle);

      this.articleService.getArticleById(this.articleId).subscribe(dataLastEmittedFromObserver => {
         this.selectedArticle = new Article(dataLastEmittedFromObserver.id,
           dataLastEmittedFromObserver.name,
           dataLastEmittedFromObserver.author,
           dataLastEmittedFromObserver.level,
           dataLastEmittedFromObserver.rights,
           dataLastEmittedFromObserver.uploadDate,
           dataLastEmittedFromObserver.articleHeadline,
           dataLastEmittedFromObserver.lede,
           dataLastEmittedFromObserver.bodyCopy,
           dataLastEmittedFromObserver.link,
           dataLastEmittedFromObserver.keywords,
           dataLastEmittedFromObserver.comments,
           dataLastEmittedFromObserver.upvotes,
           dataLastEmittedFromObserver.downvotes,
           dataLastEmittedFromObserver.target);

       });

  }

  beginUpdatingArticle(articleToUpdate){
    this.articleService.updateArticle(articleToUpdate);
  }

  beginDeletingArticle(articleToDelete){
      if(confirm("Are you sure you want to delete this article from the db?")){
        this.articleService.deleteArticle(articleToDelete);
      }
    }

}


/*
public id: number,
public name: string,
public author: string,
public level: string,
public rights: string,
public uploadDate: string,
public articleHeader: string,
public lede: string,
public bodyCopy: string,
public link: string,
public keywords: string[],
public comments: Article[],
public upvotes: number,
public downvotes: number,
public target: string
*/
