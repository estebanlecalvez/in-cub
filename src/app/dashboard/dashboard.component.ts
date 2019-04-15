import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// Service
import { StartupsServiceService } from '../startups-service.service';
import { ConsultantsService } from '../consultants.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {  
  ngOnInit() {
  }

  constructor(fb: FormBuilder, private startupService: StartupsServiceService,private consultantService:ConsultantsService) {
  }

}
