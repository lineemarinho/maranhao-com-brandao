import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalNewsComponent } from './internal-news.component';

describe('InternalNewsComponent', () => {
  let component: InternalNewsComponent;
  let fixture: ComponentFixture<InternalNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
