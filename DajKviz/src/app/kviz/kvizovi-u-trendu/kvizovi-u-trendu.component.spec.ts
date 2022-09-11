import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvizoviUTrenduComponent } from './kvizovi-u-trendu.component';

describe('KvizoviUTrenduComponent', () => {
  let component: KvizoviUTrenduComponent;
  let fixture: ComponentFixture<KvizoviUTrenduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvizoviUTrenduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KvizoviUTrenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
