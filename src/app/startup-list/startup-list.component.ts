import { Component, OnInit} from '@angular/core';

// Service
import { StartupsServiceService } from '../startups-service.service';
import { Observable } from 'rxjs';
import { Startup } from '../objects';

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
  startups;

  constructor(private startupService: StartupsServiceService) {
  }

  showModificationForm(idStartup) {
    this.showModifForm = !this.showModifForm;
    this.id = idStartup;
  }

  showAddingForm() {
    this.showAddForm = !this.showAddForm;
  }

  ngOnInit() {
    this.startups = this.startupService.list();
  }

  // ngOnChanges() {
  //   this.startups = this.startupService.list();
  // }

  delete(startupId) {
    this.startupService.deleteStartup(startupId);
  }

  update(startupToUpdate) {
    this.startupService.update(startupToUpdate);
  }
}
