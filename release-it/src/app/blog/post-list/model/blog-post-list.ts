import {BlogPostListYear} from "./blog-post-list-year";

export class BlogPostList {

    public years: BlogPostListYear[] = [];

    addYear(year: BlogPostListYear) {
        this.years.push(year);
        this.years.sort((a, b) => {
            return b.year - a.year;
        })
    }
}