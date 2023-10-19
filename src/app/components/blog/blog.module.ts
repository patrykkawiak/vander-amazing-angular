import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BlogPostComponent } from './blog-post/blog-post.component';
@NgModule({
  declarations: [BlogComponent, BlogPostsComponent, BlogPostComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [BlogComponent, BlogPostsComponent, BlogPostComponent],
})
export class BlogModule {}
