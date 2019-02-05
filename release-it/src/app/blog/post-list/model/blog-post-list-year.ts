import {BlogPostListMonth} from "./blog-post-list-month";

export class BlogPostListYear {

    public year: number = 0;
    public months: BlogPostListMonth[] = [];

    addMonth(month: BlogPostListMonth): BlogPostListYear {
        if (this.months.length == 0) {
            this.year = month.year;
        }
        this.months.push(month);
        this.months.sort((a, b) => {
            return b.month - a.month;
        });
        return this;
    }

}