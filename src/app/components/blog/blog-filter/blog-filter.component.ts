import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/core/Services/blog.service';

@Component({
  selector: 'app-blog-filter',
  templateUrl: './blog-filter.component.html',
  styleUrls: ['./blog-filter.component.scss'],
})
export class BlogFilterComponent implements OnInit {
  filter: any = 'newest';
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    if (localStorage.getItem('filter') !== null) {
      this.filter = localStorage.getItem('filter');
    }
  }

  onSelect() {
    this.blogService.filterOption.next(this.filter);
    localStorage.setItem('filter', this.filter);
  }
}
