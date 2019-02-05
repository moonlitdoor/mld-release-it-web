import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from "rxjs";
import {About} from "./model/about";
import {map} from 'rxjs/operators';

@Injectable()
export class AboutService {

    private data: Subject<About> = new Subject();

    constructor(private http: HttpClient) {
        this.http.get<About>('about.json').subscribe(about => {
            this.data.next(about)
        });
    }

    getVersion(): Observable<string> {
        return this.data.pipe(map(about => {
            return about.version
        }));
    }

    getDate(): Observable<number> {
        return this.data.pipe(map(about => {
            return about.date
        }));
    }
}
