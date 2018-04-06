import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { ArticleComponent }   from './article/article.component';

// // import { MarketplaceComponent }   from './marketplace/marketplace.component';
import { ArticleDetailComponent }   from './article-detail/article-detail.component';
// import { TradeComponent }   from './trade/trade.component';
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
  // ,
  // {
  // path: 'albums/:id',
  // component: AlbumDetailComponent
  // },
  // {
  // path: 'trade/:id',
  // component: TradeComponent
  // },
  // {
  //   path: 'admin',
  //   component: AdminComponent
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
