import { Component, OnInit } from '@angular/core';

// Service
import { StartupsServiceService } from '../startups-service.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-startup-list',
  templateUrl: './startup-list.component.html',
  styleUrls: ['./startup-list.component.css']
})
export class StartupListComponent implements OnInit {
  showModifForm;
  showAddForm;
  id;
  public isLoaded;
  public startups;

  constructor(private startupService: StartupsServiceService) {
    
   }

  showModificationForm(idStartup){
    this.showModifForm = !this.showModifForm;
    this.id = idStartup;
  }

  showAddingForm(){
    this.showAddForm = !this.showAddForm;
  }

  ngOnInit() {
    this.startups = this.startupService.getStartupList();
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    
    if(this.startups != undefined){
      this.isLoaded = true;
    }
  }

  delete(startupToDelete){
    this.startupService.deleteStartup(startupToDelete);
  }

  update(startupToUpdate){
    this.startupService.update(startupToUpdate);
  }
}
