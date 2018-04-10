import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Article } from "./models/article.model";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService {

  articles: FirebaseListObservable<any[]>; //FIX FOR FIREBASE
  // articles: Article[];
  public selectedArticle: Article;

    constructor(private database: AngularFireDatabase) {
      this.articles = database.list('articles');
    }

      getArticles() {
        return this.articles;
      }

      addArticle(newArticle: Article) {
          this.articles.push(newArticle);
          console.log("got into addArticle in article service at least!");
      }

      // addArticle(fred: Article) {
      //     // this.articles.push(newArticle);
      //     console.log("got into addArticle in article service at least!");
      //     return;
      // }

      getArticleById(articleId: string){
        return this.database.object('articles/' + articleId);
      }

      updateArticle(localUpdatedArticle){
        console.log("got into updateArticle in article `service at least!");
        var articleEntryInFirebase = this.getArticleById(localUpdatedArticle.$key);
        articleEntryInFirebase.update({id: localUpdatedArticle.id,
        name: localUpdatedArticle.name,
        author: localUpdatedArticle.author,
        level: localUpdatedArticle.level,
        rights: localUpdatedArticle.rights,
        uploadDate: localUpdatedArticle.uploadDate,
        articleHeadline: localUpdatedArticle.articleHeadline,
        lede: localUpdatedArticle.lede,
        bodyCopy: localUpdatedArticle.bodyCopy,
        link: localUpdatedArticle.link,
        keywords: localUpdatedArticle.keywords,
        comments: localUpdatedArticle.comments,
        upvotes: localUpdatedArticle.upvotes,
        downvotes: localUpdatedArticle.downvotes,
        target: localUpdatedArticle.target});
      }

      deleteArticle(localArticleToDelete){
        var articleEntryInFirebase = this.getArticleById(localArticleToDelete.$key);
        articleEntryInFirebase.remove();
      }


    }
