import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviKvizComponent } from './novi-kviz.component';

describe('NoviKvizComponent', () => {
  let component: NoviKvizComponent;
  let fixture: ComponentFixture<NoviKvizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoviKvizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoviKvizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
