import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsControlComponent } from './words-control.component';

describe('WordsControlComponent', () => {
  let component: WordsControlComponent;
  let fixture: ComponentFixture<WordsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordsControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
