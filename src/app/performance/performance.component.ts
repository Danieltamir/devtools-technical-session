import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-performance',
    templateUrl: './performance.component.html',
    styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

    countries: any[];
    filterCountryValue: string;
    filteredCountries: any[] = [];

    constructor(private http: HttpClient) {
    }

    getAllCountries() {
        this.http.get('https://restcountries.eu/rest/v2/all').subscribe((countries: any[]) => {
            this.countries = countries;
            this.badFunction();
        });
    }

    findCountriesByName(_filterCountryValue) {
        this.filteredCountries = this.countries.filter((country) => {
            return country.name.includes(_filterCountryValue);
        });
    }

    badFunction() {
        this.countries.forEach((country) => {
            console.log(country);
        });
    }

    ngOnInit(): void {
        this.getAllCountries();
    }
}
