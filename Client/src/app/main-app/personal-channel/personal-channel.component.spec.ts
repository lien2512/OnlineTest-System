import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalChannelComponent } from './personal-channel.component';

describe('PersonalChannelComponent', () => {
  let component: PersonalChannelComponent;
  let fixture: ComponentFixture<PersonalChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
