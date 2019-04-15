import { Injectable } from '@angular/core';
import { ConsultantsService } from './consultants.service';

@Injectable({
  providedIn: 'root'
})
export class StartupsServiceService {

  consultants = new ConsultantsService();
  startups = [{
    id:1,
    nom: 'Default',
    secteur: 'Rennes',
    representant: this.consultants.findOne(1).nomConsultant,
    cofondateur: this.consultants.findOne(2).nomConsultant,
    description: 'Startup Default',
    adresse: 'default@startup.net'
  }];

  constructor() { }

  ngOnInit() {
  }

  list() {
    return this.startups;
  }

  add(newStartup) {
    this.startups.push(newStartup);
  }

  delete(startupToDelete) {
    this.startups.forEach((item, index) => {
      if (item === startupToDelete) this.startups.splice(index, 1);
    });
  }

  update(startupToUpdate){
    this.startups.forEach((item, index) => {
      if (item === startupToUpdate){
        console.log('update : ', startupToUpdate);
      } 
    });
  }

  findOne(id) {
    let startup;
    this.startups.forEach(startupFind => {
      if (startupFind.id == id){
        startup = startupFind;
      } 
    });
    console.log(startup);
    return startup;
  }

  showUpdatedItem(newItem){
    let updateItem = this.startups.find(this.findIndexToUpdate, newItem.id);

    let index = this.startups.indexOf(updateItem);

    this.startups[index] = newItem;
  }

  findIndexToUpdate(newItem) { 
    return newItem.id === this;
  }
}
