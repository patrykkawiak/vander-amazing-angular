import { Component } from '@angular/core';
import { BlogService } from 'src/app/core/Services/blog.service';

@Component({
  selector: 'app-blog-filter',
  templateUrl: './blog-filter.component.html',
  styleUrls: ['./blog-filter.component.scss'],
})
export class BlogFilterComponent {
  filter: string = '';

  constructor(private blogService: BlogService) {}

  onSelect() {
    this.blogService.filterOption.next(this.filter);
  }
}
