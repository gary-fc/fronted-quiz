import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinCreatorContainerComponent } from './bulletin-creator-container.component';

describe('BulletinCreatorComponent', () => {
  let component: BulletinCreatorContainerComponent;
  let fixture: ComponentFixture<BulletinCreatorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletinCreatorContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletinCreatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
