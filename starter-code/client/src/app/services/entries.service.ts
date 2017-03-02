import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class EntriesService {
  URL: string = 'http://localhost:3000/api/journal-entries';
  constructor(private http: Http) { }


  getEntrie() {
    return this.http.get(`${this.URL}`)
      .map((res: Response) => res.json());
  }
  getOneEntrie(id){
    return this.http.get(`${this.URL}/${id}`)
      .map((res: Response) => res.json());

  }
}
