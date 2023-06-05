import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLangDictionaryComponent } from './new-lang-dictionary.component';

describe('NewLangDictionaryComponent', () => {
  let component: NewLangDictionaryComponent;
  let fixture: ComponentFixture<NewLangDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLangDictionaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLangDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
