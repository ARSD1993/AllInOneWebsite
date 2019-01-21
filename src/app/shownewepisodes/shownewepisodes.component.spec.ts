import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShownewepisodesComponent } from './shownewepisodes.component';

describe('ShownewepisodesComponent', () => {
  let component: ShownewepisodesComponent;
  let fixture: ComponentFixture<ShownewepisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShownewepisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShownewepisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
