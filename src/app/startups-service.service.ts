import { Injectable } from '@angular/core';
import { ConsultantsService } from './consultants.service';

@Injectable({
  providedIn: 'root'
})
export class StartupsServiceService {

  consultants = new ConsultantsService();
  startups = [{
    id: 1,
    nom: 'Kurmi Software',
    secteur: 'Rennes',
    representant: this.consultants.findOne(1).nomConsultant,
    cofondateur: 1,
    description: 'Startup Kurmi Software',
    adresse: 'default@startup.net'
  }, {
    id: 2,
    nom: 'Infotel',
    secteur: 'Rennes',
    representant: this.consultants.findOne(1).nomConsultant,
    cofondateur:2,
    description: 'Startup Infotel',
    adresse: 'default@startup.net'
  }, {
    id: 3,
    nom: 'Proservia',
    secteur: 'Rennes',
    representant: this.consultants.findOne(1).nomConsultant,
    cofondateur: 3,
    description: 'Startup Proservia',
    adresse: 'default@startup.net'
  }
  ];

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

  update(newStartup) {
    this.startups.forEach((startup, index) => {
      if (startup.id === newStartup.id) {
        startup = newStartup;
      }
    });
  }

  findOne(id) {
    let startup;
    this.startups.forEach(startupFind => {
      if (startupFind.id == id) {
        startup = startupFind;
      }
    });
    console.log(startup);
    return startup;
  }

  showUpdatedItem(newItem) {
    let updateItem = this.startups.find(this.findIndexToUpdate, newItem.id);

    let index = this.startups.indexOf(updateItem);

    this.startups[index] = newItem;
  }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }
}
