import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultantsService {
  consultants = [
    {
      id: 11,
      nomConsultant: "Jean-Yves Durand",
    },    
    {
      id: 12,
      nomConsultant: "Pierre La Fondue",
    },
    {
      id: 13,
      nomConsultant: "Monique Ranou",
    },
   
  ];

  constructor() { }

  addConsultant(consultant) {
    this.consultants.push(consultant);
    console.log("Successfully added consultant : " + consultant);
  }

  removeConsultant(consultant) {
    // TODO
  }

  list() {
    return this.consultants;
  }
}
