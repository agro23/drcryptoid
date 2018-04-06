import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
  }



}
