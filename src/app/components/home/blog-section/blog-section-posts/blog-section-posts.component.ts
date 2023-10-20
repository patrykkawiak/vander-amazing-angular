import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogService } from 'src/app/core/Services/blog.service';
import { Post } from 'src/app/core/Types/Post.model';

@Component({
  selector: 'app-blog-section-posts',
  templateUrl: './blog-section-posts.component.html',
  styleUrls: ['./blog-section-posts.component.scss'],
})
export class BlogSectionPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.posts = this.blogService.getFeaturedPosts().slice(0, 2);
  }
}
