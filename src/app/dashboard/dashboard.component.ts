import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AppService, ArticleService] // provider setup
})
export class DashboardComponent implements OnInit {
  @Input() selectedArticle;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

}
