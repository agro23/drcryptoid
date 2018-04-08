import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
  providers: [ArticleService]
})
export class EditArticleComponent implements OnInit {
  @Input() selectedArticle;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
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
