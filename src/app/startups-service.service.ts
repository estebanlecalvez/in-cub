import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartupsServiceService {

  startups = [{
    id:1,
    nom: 'nom',
    secteur: 'secteur',
    representant: 'representant',
    cofondateur: 'cofondateur',
    description: 'description',
    adresse: 'ceestune@adresse.test'
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
