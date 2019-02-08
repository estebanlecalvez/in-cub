import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ConsultantsService } from './consultants.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  consultantsService = new ConsultantsService();
  createDb() {
    const consultants = this.consultantsService.list();
    return { consultants };
  }

}