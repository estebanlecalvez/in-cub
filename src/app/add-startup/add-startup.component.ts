import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// Service
import { StartupsServiceService } from '../startups-service.service'

@Component({
  selector: 'app-add-startup',
  templateUrl: './add-startup.component.html',
  styleUrls: ['./add-startup.component.css']
})
export class AddStartupComponent implements OnInit {
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
    this.nomCtrl = fb.control('', [Validators.required, Validators.maxLength(20)]);
    this.secteurCtrl = fb.control('', [Validators.required, Validators.maxLength(25)]);
    this.representantCtrl = fb.control('', [Validators.required, Validators.maxLength(15)]);
    this.cofondateurCtrl = fb.control('', [Validators.required, Validators.pattern('[1-9]*')]);
    this.descriptionCtrl = fb.control('', [Validators.required, Validators.maxLength(250)]);
    this.adresseCtrl = fb.control('');

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
