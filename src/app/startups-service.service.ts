import { Injectable } from '@angular/core';
import { ConsultantsService } from './consultants.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Startup } from './objects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Injectable({
  providedIn: 'root'
})
export class StartupsServiceService {

  consultants = new ConsultantsService();
  // startups = [{
  //   id: 1,
  //   nom: 'Kurmi Software',
  //   secteur: 'Rennes',
  //   representant: this.consultants.findOne(1).nomConsultant,
  //   cofondateur: 1,
  //   description: 'Startup Kurmi Software',
  //   adresse: 'default@startup.net'
  // }, {
  //   id: 2,
  //   nom: 'Infotel',
  //   secteur: 'Rennes',
  //   representant: this.consultants.findOne(1).nomConsultant,
  //   cofondateur: 2,
  //   description: 'Startup Infotel',
  //   adresse: 'default@startup.net'
  // }, {
  //   id: 3,
  //   nom: 'Proservia',
  //   secteur: 'Rennes',
  //   representant: this.consultants.findOne(1).nomConsultant,
  //   cofondateur: 3,
  //   description: 'Startup Proservia',
  //   adresse: 'default@startup.net'
  // }
  // ];
  api = "http://localhost:8095/startup";
  apiStartups

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  list() {
    this.apiStartups = this.http.get(`${this.api}/all`,{
      observe:'body'
    }).subscribe((response => {
        console.log(response);
        return response;
      }));
  }

  add(startup: Startup): Observable<Startup> {
    return this.http.post<Startup>(`${this.api}/add`, startup);
  }

  deleteStartup(startup: Startup | number): Observable<Startup> {
    const id = typeof startup === 'number' ? startup : startup.id;
    const url = `${this.api}/delete/${id}`;
    return this.http.delete<Startup>(url);
  }

  update(startup) {
    return this.http.put(this.api, startup);
  }

  findOne(id) {
    return this.http.get(`${this.api}/find/${id}`)
  }
}
