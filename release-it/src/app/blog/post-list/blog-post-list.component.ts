import {Component, OnDestroy} from '@angular/core';
import {BlogService} from "../blog.service";
import {BlogPostListYear} from "./model/blog-post-list-year";
import {groupBy, mergeMap, reduce} from 'rxjs/operators';
import {BlogPost} from "../model/blog-post";
import {BlogPostListMonth} from "./model/blog-post-list-month";
import {BlogPostList} from "./model/blog-post-list";
import {Subscription} from "rxjs";


@Component({
    selector: "blog-post-list",
    templateUrl: 'blog-post-list.component.html'
})
export class BlogPostListComponent implements OnDestroy {

    private subscription: Subscription;

    public list: BlogPostList = new BlogPostList();

    constructor(private blogService: BlogService) {
        this.subscription = this.blogService.getBlogPosts$().pipe(
            groupBy((blog: BlogPost) => {
                return blog.published.year;
            }),
            mergeMap(group$ => {
                return group$.pipe(
                    groupBy((blog: BlogPost) => {
                        return blog.published.month;
                    }),
                    mergeMap(group$ => {
                        return group$.pipe(
                            reduce((month: BlogPostListMonth, blogPost: BlogPost) => {
                                return month.addBlogPost(blogPost);
                            }, new BlogPostListMonth()));
                    }),
                    reduce((year: BlogPostListYear, month: BlogPostListMonth) => {
                        return year.addMonth(month);
                    }, new BlogPostListYear())
                );
            }),
        ).subscribe((year: BlogPostListYear) => {
            this.list.addYear(year);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}
