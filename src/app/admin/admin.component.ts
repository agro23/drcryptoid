import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addArticles() {
    this.router.navigate(['add-article']);
    }

  editArticles() {
    this.router.navigate(['edit-article']);
    }

  returnToTopPage() {
    this.router.navigate(['']);
    }


}
