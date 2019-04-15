import { Component, OnInit } from '@angular/core';
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

  error = '';
  startupFind;
  idFind;

  nomCtrl: FormControl;
  secteurCtrl: FormControl;
  representantCtrl: FormControl;
  cofondateurCtrl: FormControl;
  descriptionCtrl: FormControl;
  adresseCtrl: FormControl;

  startupForm: FormGroup;
  
  ngOnInit() {
    // Get id param
    this.route.paramMap.subscribe(params => {
      this.find(params.get("id"));
    })
  }

  constructor(private route: ActivatedRoute, fb: FormBuilder, private startupService: StartupsServiceService) {
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


// Get one stratup by id
  find(id){
    this.startupFind = this.startupService.findOne(id);

    console.log(this.startupFind)
  }

  register() {
    this.startupService.add(this.startupForm.value)
  }

  modify(startup){
    this.startupService.update(startup);
  }

  update(startup){
    console.log(startup)

    let nomUpdate = this.nomCtrl.value;
    let secteurUpdate = this.secteurCtrl.value;
    let representantUpdate = this.representantCtrl.value;
    let cofondateurUpdate = this.cofondateurCtrl.value;
    let descriptionUpdate = this.cofondateurCtrl.value;
    let adresseUpdate = this.cofondateurCtrl.value; 

    console.log(nomUpdate);

    // TODO - Renvoyer vers le service avec les
    // valeurs ci dessus
  }
}


