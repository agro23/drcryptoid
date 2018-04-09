import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
  providers: [ArticleService]
})
export class AddArticleComponent implements OnInit {
  emptyArticle: Article;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  testRouting(emptyArticle){
    console.log("at least the button works! It's " + emptyArticle);
    this.articleService.addArticle(this.emptyArticle);
  }

  // passValue(emptyArticle){
  //   console.log("at least the button works! It's " + emptyArticle);
  //   this.articleService.addArticle(this.emptyArticle);
  // }

  sendForm(id: number, name: string, author: string, level: string, rights: string, uploadDate: string, articleHeadline: string, lede: string, bodyCopy: string, link: string, keywords: string[], comments: string[], upvotes: number, downvotes: number, target: string)
  // name: string,
  // author: string,
  // level: string,
  // rights: string)
   {

  // sendForm(id: number,
  // name: string,
  // author: string,
  // level: string,
  // rights: string,
  // uploadDate: string,
  // articleHeader: string,
  // lede: string,
  // bodyCopy: string,
  // link: string,
  // keywords: string[],
  // comments: string[],
  // upvotes: number,
  // downvotes: number,
  // target: string) {
      let newArticle: Article = new Article(id,
      name,
      author,
      level,
      rights,
      uploadDate,
      articleHeadline,
      lede,
      bodyCopy,
      link,
      keywords,
      comments,
      upvotes,
      downvotes,
      target);
      this.articleService.addArticle(newArticle);
  console.log("Got here even with undefined data!");
    }

}
