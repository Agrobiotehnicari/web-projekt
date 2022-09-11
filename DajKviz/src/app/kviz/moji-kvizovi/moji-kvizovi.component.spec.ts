import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojiKvizoviComponent } from './moji-kvizovi.component';

describe('MojiKvizoviComponent', () => {
  let component: MojiKvizoviComponent;
  let fixture: ComponentFixture<MojiKvizoviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojiKvizoviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MojiKvizoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
