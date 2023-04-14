import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWordItemComponent } from './modal-word-item.component';

describe('ModalWordItemComponent', () => {
  let component: ModalWordItemComponent;
  let fixture: ComponentFixture<ModalWordItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalWordItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalWordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
