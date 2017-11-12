import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HOST_URL } from './host';
@Injectable()
export class SignUpService {
    public host = HOST_URL;

    constructor(public http: Http) { }
    signUp(info) {
        let header = new Headers({
            'Content-Type': 'application/json'
          });
          let options = new RequestOptions({
            headers: header
         });
        return this.http.post(`${this.host}/user`, JSON.stringify(info), options)
    }
    getUserByName(name) {
        return this.http.get(`${this.host}/user/${name}`);
    }

}
