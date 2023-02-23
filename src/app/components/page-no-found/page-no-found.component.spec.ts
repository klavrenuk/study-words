import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNowFoundComponent } from './page-no-found.component';

describe('PageNowFoundComponent', () => {
  let component: PageNowFoundComponent;
  let fixture: ComponentFixture<PageNowFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNowFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNowFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
