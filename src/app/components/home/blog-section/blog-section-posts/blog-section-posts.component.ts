import { Component } from '@angular/core';
import { Post } from 'src/app/core/Types/Post.model';

@Component({
  selector: 'app-blog-section-posts',
  templateUrl: './blog-section-posts.component.html',
  styleUrls: ['./blog-section-posts.component.scss'],
})
export class BlogSectionPostsComponent {
  posts: Post[] = [
    new Post(
      'Diablo Gaming Set',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      true
    ),
    new Post(
      'Diablo Gaming Set',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      false
    ),
    new Post(
      'Diablo Gaming Set',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      true
    ),
  ];
}
