import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// Service
import { StartupsServiceService } from '../startups-service.service';

// Get param in url

@Component({
  selector: 'app-modification-page',
  templateUrl: './modification-page.component.html',
  styleUrls: ['./modification-page.component.css']
})
export class ModificationPageComponent implements OnInit {
  @Input() idStartup: number;
  error = '';
  startupFind;
  idFind;

  nameCtrl: FormControl;
  secteurCtrl: FormControl;
  representantCtrl: FormControl;
  nbrCoFondateursCtrl: FormControl;
  descriptionCtrl: FormControl;
  adresseCtrl: FormControl;
  idCtrl: FormControl;

  startupForm: FormGroup;
  ngOnInit() {
    // Get id param
    this.find();
  }

  constructor( fb: FormBuilder, private startupService: StartupsServiceService) {
    this.nameCtrl = fb.control('', [Validators.required, Validators.maxLength(20)]);
    this.secteurCtrl = fb.control('', [Validators.required, Validators.maxLength(25)]);
    this.representantCtrl = fb.control('', [Validators.required, Validators.maxLength(15)]);
    this.nbrCoFondateursCtrl = fb.control('', [Validators.required, Validators.pattern('[1-9]*')]);
    this.descriptionCtrl = fb.control('', [Validators.required, Validators.maxLength(250)]);
    this.adresseCtrl = fb.control('');

    this.startupForm = fb.group({
      name: this.nameCtrl,
      secteur: this.secteurCtrl,
      representant: this.representantCtrl,
      nbrCoFondateurs: this.nbrCoFondateursCtrl,
      description: this.descriptionCtrl,
      adresse: this.adresseCtrl,
    });
  }


  // Get one stratup by id
  find() {
    console.log('Startup id : ' + this.idStartup);
    this.startupFind = this.startupService.findOne(this.idStartup);
    console.log(this.startupFind)
  }

  update() {
    this.startupService.update(this.idStartup, this.nameCtrl.value, this.secteurCtrl.value, this.representantCtrl.value,
      this.nbrCoFondateursCtrl.value, this.descriptionCtrl.value, this.adresseCtrl.value);
      window.location.reload();
  }
}

