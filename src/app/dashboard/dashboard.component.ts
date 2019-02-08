import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// Service
import { StartupsServiceService } from '../startups-service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  error = '';

  nomCtrl: FormControl;
  secteurCtrl: FormControl;
  representantCtrl: FormControl;
  cofondateurCtrl: FormControl;
  descriptionCtrl: FormControl;
  adresseCtrl: FormControl;

  startupForm: FormGroup;
  
  ngOnInit() {
  }

  constructor(fb: FormBuilder, private startupService: StartupsServiceService) {
    this.nomCtrl = fb.control('');
    this.secteurCtrl = fb.control('', [Validators.required, Validators.maxLength(25)]);
    this.representantCtrl = fb.control('', [Validators.required, Validators.pattern('[1-9]*')]);
    this.cofondateurCtrl = fb.control('');
    this.descriptionCtrl = fb.control('');
    this.adresseCtrl = fb.control('', Validators.email);

    this.startupForm = fb.group({
      nom: this.nomCtrl,
      secteur: this.secteurCtrl,
      representant: this.representantCtrl,
      cofondateur: this.cofondateurCtrl,
      description: this.descriptionCtrl,
      adresse: this.adresseCtrl,
    });
  }

  //methods
  reset() {
    this.nomCtrl.setValue('');
    this.secteurCtrl.setValue('');
    this.representantCtrl.setValue('');
    this.cofondateurCtrl.setValue('');
    this.descriptionCtrl.setValue('');
    this.adresseCtrl.setValue('');
  }

  register() {
    this.startupService.add(this.startupForm.value)
  }
}
