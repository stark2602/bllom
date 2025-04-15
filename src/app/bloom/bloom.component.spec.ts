import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloomComponent } from './bloom.component';

describe('BloomComponent', () => {
  let component: BloomComponent;
  let fixture: ComponentFixture<BloomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloomComponent]
    });
    fixture = TestBed.createComponent(BloomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
