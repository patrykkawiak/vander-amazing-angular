import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/core/Services/blog.service';
import { Post } from 'src/app/core/Types/Post.model';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss'],
})
export class BlogPostsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  filterSub!: Subscription;
  filter!: string;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    let localFilter: any = 'newest';

    if (localStorage.getItem('filter')) {
      localFilter = localStorage.getItem('filter');
    }

    this.filterSub = this.blogService.filterOption.subscribe(
      (filter: string) => {
        this.filter = filter;
        this.posts = this.blogService.sortPost(this.filter);
      }
    );
    this.posts = this.blogService.sortPost(localFilter);
  }

  ngOnDestroy(): void {
    this.filterSub.unsubscribe();
  }
}
