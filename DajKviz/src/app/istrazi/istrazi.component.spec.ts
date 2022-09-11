import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IstraziComponent } from './istrazi.component';

describe('IstraziComponent', () => {
  let component: IstraziComponent;
  let fixture: ComponentFixture<IstraziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IstraziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IstraziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
