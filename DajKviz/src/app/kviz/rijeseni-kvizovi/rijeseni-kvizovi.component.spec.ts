import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RijeseniKvizoviComponent } from './rijeseni-kvizovi.component';

describe('RijeseniKvizoviComponent', () => {
  let component: RijeseniKvizoviComponent;
  let fixture: ComponentFixture<RijeseniKvizoviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RijeseniKvizoviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RijeseniKvizoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
