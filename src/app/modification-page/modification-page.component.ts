import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// Service
import { StartupsServiceService } from '../startups-service.service'

// Get param in url
import { ActivatedRoute } from "@angular/router";

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

  nomCtrl: FormControl;
  secteurCtrl: FormControl;
  representantCtrl: FormControl;
  cofondateurCtrl: FormControl;
  descriptionCtrl: FormControl;
  adresseCtrl: FormControl;
  idCtrl: FormControl;

  startupForm: FormGroup;
  ngOnInit() {
    // Get id param
    this.find(this.idStartup);


  }

  constructor( fb: FormBuilder, private startupService: StartupsServiceService) {
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


  // Get one stratup by id
  find(id) {
    console.log("Startup id" + this.idStartup);

    this.startupFind = this.startupService.findOne(id);
  }



  update() {
    let startup = [];
    startup.push(this.idFind + this.startupForm.value);
    console.log(startup);
    this.startupService.update(this.startupForm.value);
  }

}


