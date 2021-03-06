import { Injectable, OnInit } from '@angular/core';
import { ConsultantsService } from './consultants.service';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Startup } from './objects';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StartupsServiceService implements OnInit {

  api = 'http://localhost:8095/startup';
  private apiStartups = [];

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.list();
  }

  async list() {
    this.apiStartups = [];
    await this.http.get<any>(`${this.api}/all`).subscribe(
      result => {
        result.map(item => this.apiStartups.push(item));
      }
    );
    return this.apiStartups;
  }

  add(name, secteur, representant, nbrCoFondateurs, description, adresse) {
    return this.http.post(`${this.api}/add`,
      {
        name: name,
        secteur: secteur,
        representant: representant,
        nbrCoFondateurs: nbrCoFondateurs,
        description: description,
        adresse: adresse
      }).subscribe(
        (result) => console.log("result", result),
        () => console.log("startup ajoutée")
      );
  }

  deleteStartup(id) {
    this.http.delete(`${this.api}/delete/${id}`)
      .subscribe(
        (val) => {
          console.log("DELETE call successful value returned in body", val);
        },
        response => {
          console.log("DELETE call in error", response);
        },
        () => {
        });
  }


  update(id, name, secteur, representant, nbrCoFondateurs, description, adresse) {
    console.log(id, name, secteur, representant, nbrCoFondateurs, description, adresse);
    this.http.post(`${this.api}/update`,
      {
        uuid: id,
        name: name,
        secteur: secteur,
        representant: representant,
        nbrCoFondateurs: nbrCoFondateurs,
        description: description,
        adresse: adresse
      }).subscribe(
        (result) => console.log("result", result),
        (response) => console.log("DELETE call ", response),
        () => console.log("startup ajoutée")
      );
  }

  findOne(id) {
    return this.http.get(`${this.api}/find/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      if (error.status === 404) {
        this.router.navigateByUrl('/404');
      }
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
