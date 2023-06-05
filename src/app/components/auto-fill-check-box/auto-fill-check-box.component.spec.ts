import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFillCheckBoxComponent } from './auto-fill-check-box.component';

describe('AutoFillCheckBoxComponent', () => {
  let component: AutoFillCheckBoxComponent;
  let fixture: ComponentFixture<AutoFillCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoFillCheckBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoFillCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
