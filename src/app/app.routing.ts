import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent }   from './about/about.component';
import { ArticleComponent }   from './article/article.component';

import { ArticleDetailComponent }   from './article-detail/article-detail.component';
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
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
