import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignUpService } from '../../services/sign-up.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {
    public signUp: FormGroup;
    constructor(public fb: FormBuilder,
                public signUpService: SignUpService) { }

    ngOnInit() {
        this.signUp = this.fb.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    do(formValue) {
        this.signUpService.signUp(formValue)
            .subscribe(
                (response: any) => {
                    console.log(response);
                    this.signUpService.getUserByName(JSON.parse(response._body).name)
                        .subscribe(
                            (data: any) => {
                                console.log('response from GET USER BY NAME');
                                console.log(JSON.parse(data._body));
                                // console.log(data);
                            }
                        );
                }
            );
    }
}
