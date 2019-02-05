import {Injectable} from '@angular/core';
import {AngularFirestore, QueryDocumentSnapshot, QuerySnapshot} from "@angular/fire/firestore";
import {BlogPost} from "./model/blog-post";
import {Observable, ReplaySubject, Subject} from "rxjs";

@Injectable()
export class BlogService {

    private blogPosts$: Subject<BlogPost> = new ReplaySubject();

    constructor(private db: AngularFirestore) {
        this.db.collection("blog-posts").get().subscribe((values: QuerySnapshot<BlogPost>) => {
            values.docs.map((value: QueryDocumentSnapshot<BlogPost>) => {
                return value.data()
            }).forEach((blog: BlogPost) => {
                this.blogPosts$.next(blog);
            });
            this.blogPosts$.complete()
        });
    }

    getBlogPosts$(): Observable<BlogPost> {
        return this.blogPosts$;
    }

    addPost() {
        let post: BlogPost = {
            current: null,
            id: null,
            isPublished: true,
            published: {
                day: 5,
                month: 8,
                year: 2020
            },
            title: "titr"
        };
        this.db.collection("blog-posts").add(post);
    }
}