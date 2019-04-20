import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConsultantsService {
  consultants = [
    {
      id: 1,
      nom: 'Durand',
      prenom: 'Jean-Yves',
      description: 'Consultant senior.'
    },
    {
      id: 2,
      nom: 'Lafondue',
      prenom: 'Pierre',
      description: 'Consultant junior.'
    },
    {
      id: 3,
      nom: 'Ranou',
      prenom: 'Monique',
      description: 'Consultante senior.'
    },
  ];

  api = "http://localhost:8095/consultant";

  apiConsultants = [];
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.list();
  }

  async list() {
    this.apiConsultants = [];
    await this.http.get<any>(`${this.api}/all`).subscribe(
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
      }).subscribe(
        (result) => console.log("result", result),
        () => console.log("consultant ajouté")
      );
  }

  delete(id) {
    this.http.delete("http://localhost:8095/startup/delete/" + id)
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
    let consultant;
    this.consultants.forEach(consultantFind => {
      if (consultantFind.id === id) {
        consultant = consultantFind;
      }
    });
    console.log(consultant);
    return consultant;
  }

  update(id, nom, prenom, description) {
    console.log(id, nom, prenom, description);
    this.http.post(`${this.api}/update`,
      {
        uuid: id,
        nom: nom,
        prenom: prenom,
        description: description,
      }).subscribe(
        (result) => console.log("result", result),
        (response) => console.log("DELETE call ", response),
        () => console.log("startup ajoutée")
      );
  }


}
