import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';         // Add this for crypto lookup
import { HttpClientModule } from '@angular/common/http';    // Add this for crypto lookup
import { FormsModule } from '@angular/forms';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { AppComponent } from './app.component';
import { ReaderComponent } from './reader/reader.component';
import { AdminComponent } from './admin/admin.component';
import { ArticleComponent } from './article/article.component';
import { ForumComponent } from './forum/forum.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { LookupComponent } from './lookup/lookup.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { ListCardComponent } from './list-card/list-card.component';
import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    AdminComponent,
    ArticleComponent,
    ForumComponent,
    HeaderComponent,
    SearchComponent,
    LookupComponent,
    SearchFilterComponent,
    ListCardComponent,
    ListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MultiselectDropdownModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
