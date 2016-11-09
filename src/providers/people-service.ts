import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { IPerson } from '../shared/interfaces';


@Injectable()
export class PeopleService {

  constructor(public http: Http) {}

  private url: string = 'http://task.lafrime.net/artists/api.php';//'http://localhost:3000/db';

    getPeople() : Observable<IPerson[]> {
      //return this.http.get(this.url)
      return this.http.get(this.url + '/artists/')
                 .map((resp: Response) => resp.json())
                 .catch(this.handleError);
}

    public handleError(error: any) {
      console.log("GOT RESULTS");
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }

  }
