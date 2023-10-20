import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ErrorComponent } from './components/error/error.component';
import { BlogPostComponent } from './components/blog/blog-post/blog-post.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopItemDetailComponent } from './components/shop/shop-item-detail/shop-item-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'shop', component: ShopComponent },
  {
    path: 'shop/:itemId',
    component: ShopItemDetailComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  { path: 'blog/:id', component: BlogPostComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
