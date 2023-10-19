import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogService } from 'src/app/core/Services/blog.service';
import { Post } from 'src/app/core/Types/Post.model';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss'],
})
export class BlogPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.posts = this.blogService.getPosts();
  }
}
