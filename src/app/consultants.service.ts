import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultantsService {
  consultants = [
    {
      id: 1,
      nomConsultant: "Jean-Yves Durand",
    },    
    {
      id: 2,
      nomConsultant: "Pierre La Fondue",
    },
    {
      id: 3,
      nomConsultant: "Monique Ranou",
    },
   
  ];

  constructor() { }

  addConsultant(consultant) {
    this.consultants.push(consultant);
    console.log("Successfully added consultant : " + consultant);
  }

  removeConsultant(consultant) {
    this.consultants.forEach( (consultantInList, index) => {
      if(consultantInList === consultant) this.consultants.splice(index,1);
    });
    console.log("Successfully deleted consultant : " + consultant);
  }

  findOne(id) {
    let consultant;
    this.consultants.forEach(consultantFind => {
      if (consultantFind.id == id){
        consultant = consultantFind;
      } 
    });
    console.log(consultant);
    return consultant;
  }
  list() {
    return this.consultants;
  }
}
