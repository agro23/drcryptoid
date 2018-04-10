import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from './data.service';         // Add this for crypto lookup
import { HttpClientModule } from '@angular/common/http';    // Add this for crypto lookup
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { ArticleService } from './article.service';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { AppComponent } from './app.component';
import { ReaderComponent } from './reader/reader.component';
import { AdminComponent } from './admin/admin.component';
import { ArticleComponent } from './article/article.component';
import { ForumComponent } from './forum/forum.component';
import { SearchComponent } from './search/search.component';
import { LookupComponent } from './lookup/lookup.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { ListCardComponent } from './list-card/list-card.component';
import { ListComponent } from './list/list.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AboutComponent } from './about/about.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    AdminComponent,
    ArticleComponent,
    ForumComponent,
    SearchComponent,
    LookupComponent,
    SearchFilterComponent,
    ListCardComponent,
    ListComponent,
    DashboardComponent,
    AboutComponent,
    ArticleDetailComponent,
    EditArticleComponent,
    AddArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MultiselectDropdownModule
  ],
  providers: [ArticleService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
