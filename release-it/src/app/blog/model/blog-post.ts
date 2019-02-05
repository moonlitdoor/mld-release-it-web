export class BlogPost {
    public current: any = null;
    public id: string;
    public isPublished: boolean;
    public published: Published;
    public title;
}

class Published {
    public day: number;
    public month: number;
    public year: number;
}