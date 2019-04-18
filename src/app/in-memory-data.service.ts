import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ConsultantsService } from './consultants.service';
import { Injectable } from '@angular/core';
import { StartupsServiceService } from './startups-service.service';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  // consultantsService = new ConsultantsService();
  // startupsService = new StartupsServiceService();
  // createDb() {
  //   const consultants = this.consultantsService.list();
  //   const startups = this.startupsService.list();
  //   return { consultants,startups };
  // }

}