import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AboutService {

    private data: Promise<any>;

    constructor(private http: HttpClient) {
        this.data = this.http.get('about.json').toPromise();
    }

    getVersion(): Promise<string> {
        return this.data.then(
            data => data.version
        );
    }

    getDate(): Promise<number> {
        return this.data.then(data => data.date);
    }
}
