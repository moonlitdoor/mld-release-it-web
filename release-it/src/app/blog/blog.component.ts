import {Component} from '@angular/core';
import {BlogService} from "./blog.service";

@Component({
    templateUrl: 'blog.component.html'
})
export class BlogComponent {

    constructor(private blogService: BlogService) {
        this.blogService.getBlogPosts$()
    }

    addPost() {
        this.blogService.addPost();
    }
}