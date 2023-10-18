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
      'https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      true
    ),
    new Post(
      'Diablo Gaming Set',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Post(
      'Diablo Gaming Set',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      'https://images.pexels.com/photos/7858743/pexels-photo-7858743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      true
    ),
  ];
}
