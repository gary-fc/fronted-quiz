import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinCreatorComponent } from './bulletin-creator.component';

describe('BulletinCreatorComponent', () => {
  let component: BulletinCreatorComponent;
  let fixture: ComponentFixture<BulletinCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletinCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletinCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
