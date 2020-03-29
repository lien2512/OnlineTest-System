import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTestComponent } from './manager-test.component';

describe('ManagerTestComponent', () => {
  let component: ManagerTestComponent;
  let fixture: ComponentFixture<ManagerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
