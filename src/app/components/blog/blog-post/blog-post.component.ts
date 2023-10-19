import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/core/Services/blog.service';
import { Post } from 'src/app/core/Types/Post.model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  // nie wiem dlaczego ale bez "!" mam erorr cały czas, nawet po zmianie config.ts na no strict

  currentPost!: Post;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private blogServices: BlogService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.currentPost = this.blogServices.getPost(this.id);
    console.log(this.currentPost);
  }
}
