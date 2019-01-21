import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewepisodeComponent } from './addnewepisode.component';

describe('AddnewepisodeComponent', () => {
  let component: AddnewepisodeComponent;
  let fixture: ComponentFixture<AddnewepisodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewepisodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewepisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
