import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerBankQuestionsComponent } from './manager-bank-questions.component';

describe('ManagerBankQuestionsComponent', () => {
  let component: ManagerBankQuestionsComponent;
  let fixture: ComponentFixture<ManagerBankQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerBankQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerBankQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
