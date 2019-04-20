import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// Service
import { ConsultantsService } from '../consultants.service';

@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.css']
})
export class AddConsultantComponent implements OnInit {
  error = '';
  nomCtrl: FormControl;
  prenomCtrl: FormControl;
  descriptionCtrl: FormControl;
  consultantForm: FormGroup;


  consultantFind;
  constructor(fb: FormBuilder, private consultantService: ConsultantsService) {
    this.nomCtrl = fb.control('', [Validators.required, Validators.maxLength(20)]);
    this.prenomCtrl = fb.control('', [Validators.required, Validators.maxLength(20)]);
    this.descriptionCtrl = fb.control('', [Validators.required, Validators.maxLength(250)]);

    this.consultantForm = fb.group({
      nom: this.nomCtrl,
      prenom: this.prenomCtrl,
      description: this.descriptionCtrl,
    });
  }

  ngOnInit() {
  }

  add() {
    console.log(this.nomCtrl.value, this.prenomCtrl.value, this.descriptionCtrl.value);
    this.consultantService.add(this.nomCtrl.value, this.prenomCtrl.value, this.descriptionCtrl.value);
    window.location.reload();
  }

}
