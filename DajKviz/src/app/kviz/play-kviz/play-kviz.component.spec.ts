import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayKvizComponent } from './play-kviz.component';

describe('PlayKvizComponent', () => {
  let component: PlayKvizComponent;
  let fixture: ComponentFixture<PlayKvizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayKvizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayKvizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
