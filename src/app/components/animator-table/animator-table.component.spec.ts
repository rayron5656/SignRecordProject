import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatorTableComponent } from './animator-table.component';

describe('AnimatorTableComponent', () => {
  let component: AnimatorTableComponent;
  let fixture: ComponentFixture<AnimatorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatorTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
