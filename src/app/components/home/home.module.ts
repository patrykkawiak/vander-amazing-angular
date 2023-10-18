import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { HotshotComponent } from './header/hotshot/hotshot.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BlogSectionPostsComponent } from './blog-section/blog-section-posts/blog-section-posts.component';

@NgModule({
  declarations: [HeaderComponent, HotshotComponent, BlogSectionComponent, BlogSectionPostsComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [HeaderComponent, HotshotComponent, BlogSectionComponent, BlogSectionPostsComponent],
})
export class HomeModule {}
