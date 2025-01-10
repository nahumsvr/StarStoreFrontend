import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ArticleComponent } from './components/article/article.component';
import { AccountComponent } from './components/account/account.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'article',
    component: ArticleComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'shoping-cart',
    component: ShoppingCartComponent
  }
];
