import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Article } from './models/article.model';
import { CurrencyPipe } from '@angular/common';
import { ArticleService } from './article.service';
import { Router } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})

export class AppComponent {
  articles: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  objectKeys = Object.keys;
  cryptos: any;
  title = 'Dr.CryptoID';
  myArticles = [];
  constructor(private router: Router, private articleService: ArticleService, private _data: DataService) {

  }

  ngOnInit() {

      this._data.getPrices()
        .subscribe(res => {
          this.cryptos = res;
          //console.log(res);
        });
    }
}
