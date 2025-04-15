import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulantComponent } from './consulant.component';

describe('ConsulantComponent', () => {
  let component: ConsulantComponent;
  let fixture: ComponentFixture<ConsulantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsulantComponent]
    });
    fixture = TestBed.createComponent(ConsulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
