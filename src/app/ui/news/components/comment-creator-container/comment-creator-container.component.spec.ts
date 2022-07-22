import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommentCreatorContainerComponent} from './comment-creator-container.component';

describe('CommentCreatorComponent', () => {
  let component: CommentCreatorContainerComponent;
  let fixture: ComponentFixture<CommentCreatorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentCreatorContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentCreatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toString();
  });
});
