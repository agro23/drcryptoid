import { Injectable } from '@angular/core';
import { Article } from "./models/article.model";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService {
  // articles: FirebaseListObservable<any[]>; FIX FOR FIREBASE
  articles: Article[];

    constructor(private database: AngularFireDatabase) {
      // this.articles = database.list('articles');
    }

      getArticles() {
        // return ALBUMS;
        return this.articles;
      }

      addArticle(newArticle: Article) {
          this.articles.push(newArticle);
      }

      getArticleById(articleId: number){
        return this.database.object('articles/' + articleId);
        }

      // getArticleById(articleId: string){
      //   return this.database.object('articles/' + articleId);
      //   }

      // updateArticle(localUpdatedArticle){
      // HAVE TO UPDATE ALL FIELDS
      //   var articleEntryInFirebase = this.getArticleById(localUpdatedArticle.$key);
      //   articleEntryInFirebase.update({title: localUpdatedArticle.title,
      //                               artist: localUpdatedArticle.artist,
      //                               description: localUpdatedArticle.description});
      // }

      deleteArticle(localArticleToDelete){
        var articleEntryInFirebase = this.getArticleById(localArticleToDelete.$key);
        articleEntryInFirebase.remove();
      }

    }
