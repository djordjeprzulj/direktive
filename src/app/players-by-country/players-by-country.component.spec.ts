import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersByCountryComponent } from './players-by-country.component';

describe('PlayersByCountryComponent', () => {
  let component: PlayersByCountryComponent;
  let fixture: ComponentFixture<PlayersByCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersByCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
