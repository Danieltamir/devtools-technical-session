import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-network',
    templateUrl: './network.component.html',
    styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

    countries: any;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }

    getAllCountries() {
        this.http.get('https://restcountries.eu/rest/v2/all').subscribe((countries) => {
            this.countries = countries;
        });
    }
}
