import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { NavigationModule } from './components/navigation/navigation.module';
import { HomeModule } from './components/home/home.module';
import { BlogPostsComponent } from './components/blog/blog-posts/blog-posts.component';
import { BlogModule } from './components/blog/blog.module';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent],
  imports: [
    BrowserModule,
    NavigationModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    BlogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
