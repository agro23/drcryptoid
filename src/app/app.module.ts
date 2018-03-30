import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';         // Add this for crypto lookup
import { HttpClientModule } from '@angular/common/http';    // Add this for crypto lookup


import { AppComponent } from './app.component';
import { ReaderComponent } from './reader/reader.component';
import { AdminComponent } from './admin/admin.component';
import { ArticleComponent } from './article/article.component';
import { ForumComponent } from './forum/forum.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { LookupComponent } from './lookup/lookup.component';


@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    AdminComponent,
    ArticleComponent,
    ForumComponent,
    HeaderComponent,
    SearchComponent,
    LookupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
