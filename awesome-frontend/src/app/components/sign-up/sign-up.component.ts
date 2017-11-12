import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {
    public signUp: FormGroup;
    constructor(public fb: FormBuilder) { }

    ngOnInit() {
        this.signUp = this.fb.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    do(formValue) {
        console.log(formValue);
    }
}
