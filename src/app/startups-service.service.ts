import { Injectable, OnInit } from '@angular/core';
import { ConsultantsService } from './consultants.service';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Startup } from './objects';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StartupsServiceService implements OnInit {

  consultants = new ConsultantsService();
  api = "http://localhost:8095/startup";
  private apiStartups: any[];

  constructor(private http: HttpClient) {
    this.list();
   }

  ngOnInit() {
  }

  list() {
    this.apiStartups = this.http.get(`${this.api}/all`).subscribe(
      (val) => {
        console.log('list() in stratups service', val);
      });
  }

  refresh() {
    this.apiStartups = [];

    this.http.get(`${this.api}/all`).pipe(
      map(
        (jsonArray: Object[]) => jsonArray.map(jsonItem => this.apiStartups.push(jsonItem))
      )
    );

    console.log("apiStratups in stratups service", this.apiStartups);
  }

  getStartups(){
    return this.apiStartups;
  }

  add(startup) {
    console.log('click on add');
    console.log(startup);
    return this.http.post(`${this.api}/add`, { startup }).pipe(
      catchError(this.handleError)
    );
  }

  deleteStartup(id) {
    this.http.delete("http://localhost:8095/startup/delete/" + id)
      .subscribe(
        (val) => {
          console.log("DELETE call successful value returned in body",val);
        },
        response => {
          console.log("DELETE call in error", response);
        },
        () => {
          console.log("The DELETE observable is now completed.");
        });
  }


  update(startup) {
    return this.http.put(`${this.api}/update`, startup).pipe(
      catchError(this.handleError)
    );
  }

  findOne(id) {
    return this.http.get(`${this.api}/find/${id}`).pipe(
      catchError(this.handleError)
    );
  }

 

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
