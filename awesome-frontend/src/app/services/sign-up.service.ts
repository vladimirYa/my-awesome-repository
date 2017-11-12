import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HOST_URL } from './host';
@Injectable()
export class SignUpService {
    public host = HOST_URL;

    constructor(public http: Http) { }
    signUp(info) {
        return this.http.post(`${this.host}/sign-up`, JSON.stringify(info))
    }

}
