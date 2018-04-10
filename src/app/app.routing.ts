import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent }   from './about/about.component';
import { AdminComponent }   from './admin/admin.component';
import { ArticleComponent }   from './article/article.component';
import { ArticleDetailComponent }   from './article-detail/article-detail.component';
import { EditArticleComponent }   from './edit-article/edit-article.component';
import { AddArticleComponent }   from './add-article/add-article.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

// import { AdminComponent }   from './admin/admin.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ArticleComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'article',
    component: ArticleComponent
  },
  {
    path: 'articles/:id',
    component: ArticleDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'edit-article',
    component: EditArticleComponent
  },
  {
    path: 'add-article',
    component: AddArticleComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
