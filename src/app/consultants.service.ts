import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ConsultantsService {

  api = "http://localhost:8095/consultant";

  apiConsultants = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.list();
  }

  async list() {
    this.apiConsultants = [];
    await this.http.get<any>(`${this.api}/all`).pipe(
      catchError(this.handleError)
    ).subscribe(
      result => {
        result.map(item => this.apiConsultants.push(item));
      }
    );
    return this.apiConsultants;
  }


  add(nom, prenom, description) {
    return this.http.post(`${this.api}/add`,
      {
        nom: nom,
        prenom: prenom,
        description: description
      }).pipe(
        catchError(this.handleError)
      ).subscribe(
        (result) => console.log("result", result),
        () => console.log("consultant ajouté")
      );
  }

  delete(id) {
    this.http.delete(`${this.api}/delete/${id}`).pipe(
      catchError(this.handleError)
    )
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

  findOne(id) {
    return this.http.get(`${this.api}/find/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  update(id, nom, prenom, description) {
    console.log(id, nom, prenom, description);
    this.http.post(`${this.api}/update`,
      {
        uuid: id,
        nom: nom,
        prenom: prenom,
        description: description,
      }).pipe(
        catchError(this.handleError)
      ).subscribe(
        (result) => console.log("result", result),
        (response) => console.log("DELETE call ", response),
        () => console.log("startup ajoutée")
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
