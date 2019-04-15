import { Component, OnInit } from '@angular/core';

// Service
import { ConsultantsService } from '../consultants.service'

@Component({
  selector: 'app-consultant-list',
  templateUrl: './consultant-list.component.html',
  styleUrls: ['./consultant-list.component.css']
})
export class ConsultantListComponent implements OnInit {

  consultants = [];

  constructor(private consultantService: ConsultantsService) { }

  ngOnInit() {
    this.consultants = this.consultantService.list();
  }

  delete(consultantToDelete){
    this.consultantService.delete(consultantToDelete);
  }

  update(consultantToUpdate){
    this.consultantService.update(consultantToUpdate);
  }
}
