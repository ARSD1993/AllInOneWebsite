import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistboardComponent } from './todolistboard.component';

describe('TodolistboardComponent', () => {
  let component: TodolistboardComponent;
  let fixture: ComponentFixture<TodolistboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
