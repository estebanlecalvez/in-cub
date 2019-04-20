import { Component, OnInit, Input } from '@angular/core';
import { ConsultantsService } from '../consultants.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modify-consultant',
  templateUrl: './modify-consultant.component.html',
  styleUrls: ['./modify-consultant.component.css']
})
export class ModifyConsultantComponent implements OnInit {
  @Input() idConsultant: number;
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

  // Get one stratup by id
  find(id) {
    console.log('Startup id' + this.idConsultant);
    this.consultantFind = this.consultantService.findOne(id);
  }

  update() {
    const consultant = [];
    consultant.push(this.idConsultant + this.consultantForm.value);
    this.consultantService.update(this.idConsultant, this.nomCtrl.value, this.prenomCtrl.value, this.descriptionCtrl.value);
    window.location.reload();
  }
}
