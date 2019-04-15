import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyConsultantComponent } from './modify-consultant.component';

describe('ModifyConsultantComponent', () => {
  let component: ModifyConsultantComponent;
  let fixture: ComponentFixture<ModifyConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
