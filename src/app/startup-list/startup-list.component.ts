import { Component, OnInit } from '@angular/core';

// Service
import { StartupsServiceService } from '../startups-service.service'

@Component({
  selector: 'app-startup-list',
  templateUrl: './startup-list.component.html',
  styleUrls: ['./startup-list.component.css']
})
export class StartupListComponent implements OnInit {

  startups = [];

  constructor(private startupService: StartupsServiceService) { }

  ngOnInit() {
    this.startups = this.startupService.list();
  }
}
