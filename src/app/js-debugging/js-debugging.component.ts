import {Component} from '@angular/core';

@Component({
    selector: 'app-js-debugging',
    templateUrl: './js-debugging.component.html',
    styleUrls: ['./js-debugging.component.css']
})
export class JsDebuggingComponent {
    resultNumber: number;
    appName: string;
    appInArray: boolean;
    showResult: boolean;
    appArray = ['Orca', 'Iris', 'SecureTrack', 'TOS2', 'SecureChange', 'SecureApp'];

    mainFunction() {
        let randomNumber = Math.random();
        randomNumber = randomNumber * 2;
        this.resultNumber = randomNumber * 2;
        this.secondaryFunction(this.resultNumber);
    }

    secondaryFunction(number: number) {
        console.log(number);
        number = number * number;
        this.resultNumber = number;
    };

    checkAppNameExistInString(_appName) {
        this.showResult = true;
        this.appInArray = this.appArray.indexOf(_appName) > -1 ? true : false;
        setTimeout(() => {
            this.showResult = false;
        }, 2000);
    }
}
