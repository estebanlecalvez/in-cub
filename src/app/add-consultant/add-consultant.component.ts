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

  nomConsultantCtrl: FormControl;


  consultantForm: FormGroup;
  
  ngOnInit() {
  }

  constructor(fb: FormBuilder, private consultantService: ConsultantsService) {
    this.nomConsultantCtrl = fb.control('');


    this.consultantForm = fb.group({
      nomConsultant: this.nomConsultantCtrl,
    });
  }

  //methods
  reset() {
    this.nomConsultantCtrl.setValue('');
  }

  register() {
    this.consultantService.add(this.consultantForm.value)
  }
}
