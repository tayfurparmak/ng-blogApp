import { Component, OnInit } from '@angular/core';

import { BlogService } from './services/blog.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  blogs: any[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadBlogs();
  }

  async loadBlogs() {
    this.blogs = await this.blogService.Get();
  }
}
