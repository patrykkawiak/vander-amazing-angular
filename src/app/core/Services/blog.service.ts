import { Injectable } from '@angular/core';
import { Post } from '../Types/Post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  postsChanged = new Subject<Post[]>();

  posts: Post[] = [
    new Post(
      'Chłodzenie wodne, hit czy kit?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime',
      'https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      new Date('July 21, 2023')
    ),
    new Post(
      'Klawiatura mechaniczna a membranowa',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      new Date('July 17, 2023')
    ),
    new Post(
      'Ergonomiczne stanowisko',
      'LoLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maximerem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      'https://images.pexels.com/photos/7858743/pexels-photo-7858743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      new Date(),
      true
    ),
    new Post(
      'New Pady RGB!',
      'LoLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maximerem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      'https://images.pexels.com/photos/596750/pexels-photo-596750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      new Date('July 11, 2023'),
      true
    ),
    new Post(
      'Znowu ten Minecraft?',
      'LorLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maximeem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis adipisci necessitatibus perferendis, at impedit vel, explicabo, maxime deserunt quo ad dolorem perspiciatis ducimus nulla! Ut esse consequuntur asperiores maxime?',
      'https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      new Date('July 14, 2023')
    ),
  ];

  getPosts() {
    return [...this.posts];
  }

  getFeaturedPosts() {
    const featuredPosts = this.posts.filter((post) => post.isFeatured);
    return featuredPosts;
  }

  getPost(index: number) {
    return this.posts[index];
  }
}