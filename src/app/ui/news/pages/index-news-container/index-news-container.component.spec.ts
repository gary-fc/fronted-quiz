import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexNewsContainerComponent } from './index-news-container.component';

describe('IndexNewsComponent', () => {
  let component: IndexNewsContainerComponent;
  let fixture: ComponentFixture<IndexNewsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexNewsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexNewsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
