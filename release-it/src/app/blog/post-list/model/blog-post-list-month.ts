import {BlogPost} from "../../model/blog-post";

export class BlogPostListMonth {

    public month: number = 0;
    public year: number = 0;
    public blogPosts: BlogPost[] = [];

    addBlogPost(blogPost: BlogPost): BlogPostListMonth {
        if (this.blogPosts.length == 0) {
            this.year = blogPost.published.year;
            this.month = blogPost.published.month;
        }
        this.blogPosts.push(blogPost);
        this.blogPosts.sort((a, b) => {
            return b.published.day - a.published.day;
        });
        return this;
    }
}
