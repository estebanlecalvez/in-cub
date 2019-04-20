import { Component, OnInit, Input } from '@angular/core';

// Service
import { ConsultantsService } from '../consultants.service'

@Component({
  selector: 'app-consultant-list',
  templateUrl: './consultant-list.component.html',
  styleUrls: ['./consultant-list.component.css']
})
export class ConsultantListComponent implements OnInit {
  @Input() idConsultant:number;
  showModifForm;
  showAddForm =false;
  consultants;

  constructor(private consultantService: ConsultantsService) { }

  ngOnInit() {
    this.consultants = this.consultantService.list();
  }

  async delete(consultantId) {
    console.log("Delete in startup-list : ", consultantId);
    this.consultantService.delete(consultantId);
    window.location.reload();
  }

  showModificationForm(idConsultant){
    this.showModifForm = !this.showModifForm;
    this.idConsultant = idConsultant;
  }

  showAddingForm(){
    this.showAddForm = !this.showAddForm;
  }

}
