import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvizListExpandedComponent } from './kviz-list-expanded.component';

describe('KvizListExpandedComponent', () => {
  let component: KvizListExpandedComponent;
  let fixture: ComponentFixture<KvizListExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvizListExpandedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KvizListExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
