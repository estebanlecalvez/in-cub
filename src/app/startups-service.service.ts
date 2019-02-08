import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartupsServiceService {

  startups = [{
    nom : 'test',
    secteur : 'test',
    representant : 'test',
    cofondateur : 'test',
    description : 'test',
    adresse : 'test@test.fr'
  }];

  constructor() { }

  ngOnInit() {
  }

  list(){
    return this.startups;
  }

  add(newStartup){
    console.log('Add startup : ', newStartup)
    this.startups.push(newStartup);
    console.log('Startup list : ', this.startups)
  }

  // TODO
  delete(startupToDelete){
    console.log('Delete startup : ', startupToDelete)
  }

  // TODO
  findOne(startupToFind){
    console.log('Find startup : ', startupToFind)
  }
}
