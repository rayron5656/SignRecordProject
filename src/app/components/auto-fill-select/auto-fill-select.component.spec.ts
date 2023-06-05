import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFillSelectComponent } from './auto-fill-select.component';

describe('AutoFillSelectComponent', () => {
  let component: AutoFillSelectComponent;
  let fixture: ComponentFixture<AutoFillSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoFillSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoFillSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
