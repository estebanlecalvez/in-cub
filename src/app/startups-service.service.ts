import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartupsServiceService {

  startups = [{
    nom: 'test',
    secteur: 'test',
    representant: 'test',
    cofondateur: 'test',
    description: 'test',
    adresse: 'test@test.fr'
  }];

  constructor() { }

  ngOnInit() {
  }

  list() {
    return this.startups;
  }

  add(newStartup) {
    console.log('Add startup : ', newStartup)
    this.startups.push(newStartup);
    console.log('Startup list : ', this.startups)
  }

  // TODO
  delete(startupToDelete) {
    console.log(startupToDelete)
    this.startups.forEach((item, index) => {
      if (item === startupToDelete) this.startups.splice(index, 1);
    });
    console.log(this.startups)
  }

  // TODO
  findOne(startupToFind) {
    console.log('Find startup : ', startupToFind)
  }
}
