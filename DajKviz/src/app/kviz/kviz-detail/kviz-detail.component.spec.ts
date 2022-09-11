import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvizDetailComponent } from './kviz-detail.component';

describe('KvizDetailComponent', () => {
  let component: KvizDetailComponent;
  let fixture: ComponentFixture<KvizDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvizDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KvizDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
