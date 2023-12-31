import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAreaComponent } from './tasks-area.component';

describe('TasksAreaComponent', () => {
  let component: TasksAreaComponent;
  let fixture: ComponentFixture<TasksAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksAreaComponent]
    });
    fixture = TestBed.createComponent(TasksAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
