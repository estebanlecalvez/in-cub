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

  add(consultant) {
    this.consultants.push(consultant);
    console.log("Successfully added consultant : " + consultant);
  }

  delete(consultant) {
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

  update(consultantToUpdate) {
    this.consultants.forEach((item, index) => {
      if (item === consultantToUpdate) {
        console.log('update : ', consultantToUpdate);
      }
    });
  }

  list() {
    return this.consultants;
  }
}
