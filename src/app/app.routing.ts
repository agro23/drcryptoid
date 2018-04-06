import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
// // import { MarketplaceComponent }   from './marketplace/marketplace.component';
// import { ArticlemDetailComponent }   from './album-detail/album-detail.component';
// import { TradeComponent }   from './trade/trade.component';
// import { AdminComponent }   from './admin/admin.component';


const appRoutes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  {
    path: 'about',
    component: AboutComponent
  }
  //,
  // {
  //   path: 'marketplace',
  //   component: MarketplaceComponent
  // },
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
