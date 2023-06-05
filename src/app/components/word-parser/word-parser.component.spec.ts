import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordParserComponent } from './word-parser.component';

describe('WordParserComponent', () => {
  let component: WordParserComponent;
  let fixture: ComponentFixture<WordParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordParserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
