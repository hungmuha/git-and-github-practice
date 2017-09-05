import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HylianShieldComponent } from './hylian-shield.component';

describe('HylianShieldComponent', () => {
  let component: HylianShieldComponent;
  let fixture: ComponentFixture<HylianShieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HylianShieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HylianShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
